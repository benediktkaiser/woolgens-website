import React, {FC} from "react";
import BaseInput from "./BaseInput";

declare interface BaseInputWithLabelProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label: string
    left?: boolean
    error?: string
}

const BaseInputWithLabel: FC<BaseInputWithLabelProps> = ({label, left, error, ...HTMLAttributes}) => {
    return (
        <label className={`${left && 'flex items-center'}`}>
            <p className="pl-1 my-1 mr-5 text-lg text-gray-200">
                {label}:
            </p>
            <div className="relative w-full">
                <BaseInput {...HTMLAttributes} />
                <p className="absolute -bottom-5 left-0 pl-1 mt-1 text-xs font-bold text-red-500">
                    {error}
                </p>
            </div>
        </label>
    )
}

export default BaseInputWithLabel
