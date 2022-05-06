import React, {FC} from "react";

declare interface CheckBoxWithLabelProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label: string
}

const CheckBoxWithLabel: FC<CheckBoxWithLabelProps> = ({label, ...HTMLAttributes}) => {
    return (
        <label className="inline-flex items-center">
            <input {...HTMLAttributes}
                   className="mr-2 w-6 h-6 bg-shark-500 checked:bg-blue-600 rounded border border-shark-400 checked:border-blue-600 transition duration-200 cursor-pointer focus:outline-none"
                   type="checkbox"/>
            <p className="text-lg text-gray-200">
                {label}
            </p>
        </label>
    )
}

export default CheckBoxWithLabel
