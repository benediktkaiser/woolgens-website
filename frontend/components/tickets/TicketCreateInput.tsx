import React, {FC} from "react";
import BaseInputWithLabel from "../common/forms/BaseInputWithLabel";
import dynamic from "next/dynamic";

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
                <p className="pl-1 my-1 mr-5 mb-1 text-lg text-gray-200">
                    {input.label}:
                </p>
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
            <BaseInputWithLabel
                onChange={event => setValue(event.target.value)}
                label={input.label}
            />
        </div>
    )
}

export default TicketCreateInput
