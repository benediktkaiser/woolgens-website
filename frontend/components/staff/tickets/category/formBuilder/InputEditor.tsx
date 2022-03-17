import BaseInputWithLabel from "../../../../common/forms/BaseInputWithLabel";
import CheckBoxWithLabel from "../../../../common/forms/CheckBoxWithLabel";
import React, {ChangeEvent, useEffect, useState} from "react";
import BaseButton from "../../../../common/BaseButton";

const InputEditor = ({input, setInput}: {input: TicketInput, setInput: (input: TicketInput) => void}) => {
    const [temporaryInput, setTemporaryInput] = useState<TicketInput>(undefined)

    useEffect(() => {
        setTemporaryInput(input)
    }, [input])

    if (!temporaryInput) {
        return <div />
    }

    const submit = (event: ChangeEvent<HTMLFormElement>) => {
        event.preventDefault()
        setInput(temporaryInput)
    }

    return (
        <form key={temporaryInput.id} onSubmit={submit}>
            <div className="flex flex-col gap-4 mb-4">
                <BaseInputWithLabel
                    defaultValue={temporaryInput.label}
                    label="Label"
                    onChange={(event) => setTemporaryInput({
                        ...input,
                        label: event.target.value
                    })}
                />
                <div>
                    <BaseInputWithLabel
                        defaultValue={temporaryInput.hint}
                        label="Hint"
                        onChange={(event) => setTemporaryInput({
                            ...input,
                            hint: event.target.value
                        })}
                    />
                    <p className="pt-1 pl-1 text-sm text-gray-400">
                        A small text display, giving the user more context to what we want of them.
                    </p>
                </div>
                <div>
                    <BaseInputWithLabel
                        label="Type"
                        defaultValue={temporaryInput.type}
                        onChange={(event) => setTemporaryInput({
                            ...input,
                            type: (event.target.value === "TextBox") ? "TextBox" : "Text"
                        })}
                    />
                    <p className="pt-2 pl-1 text-sm text-gray-400">
                        Please enter only one of the following: <span className="px-1 bg-shark-700 rounded">Text, TextBox</span>
                    </p>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <CheckBoxWithLabel
                    defaultChecked={temporaryInput.required}
                    onChange={(event) => setTemporaryInput({
                        ...input,
                        required: event.target.checked
                    })}
                    label="Required"
                />
                <BaseButton type="primary" htmlType="submit">
                    Update input
                </BaseButton>
            </div>
        </form>
    )
}

export default InputEditor
