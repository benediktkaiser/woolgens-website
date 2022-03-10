import React, {FC} from "react";
import dynamic from "next/dynamic";
import BaseInput from "../common/forms/BaseInput";

const Editor = dynamic(() => import('../../components/quill/Editor'), {
    ssr: false
})
interface TicketCreateInputProps {
    content: string,
    input: TicketInput
    onChange: (inputId: string, content: string) => void
}

const TicketCreateInput: FC<TicketCreateInputProps> = ({input, onChange, content = ""}) => {

    const setValue = (value) => {
        onChange(input.label, value)
    }

    if (input.type === "TextBox") {
        return (
            <div>
                <div className="flex justify-between items-end">
                    <div className="pl-1 my-1.5">
                        <h1 className="text-xl text-gray-200">
                            {input.label}:
                        </h1>
                        {input.hint && (
                            <p className="text-sm text-gray-500">
                                {input.hint}
                            </p>
                        )}
                    </div>
                </div>

                <div className="relative w-full">
                    <Editor
                        content={content}
                        setContent={setValue}
                        showWords={true}
                    />
                </div>
            </div>
        )
    }

    return (
        <div>
            <label>
                <div className="pl-1 my-1.5">
                    <h1 className="text-xl text-gray-200">
                        {input.label}:
                    </h1>
                    {input.hint && (
                        <p className="text-sm text-gray-500">
                            {input.hint}
                        </p>
                    )}
                </div>
                <div className="relative w-full">
                    <BaseInput
                        defaultValue={content}
                        onChange={event => setValue(event.target.value)}
                    />
                    {input.required && (
                        <p className="absolute right-0 -bottom-5 pr-1 mt-1.5 text-xs text-red-400">
                            Required
                        </p>
                    )}
                </div>
            </label>
        </div>
    )
}

export default TicketCreateInput
