import React, {FC, useState} from "react";
import BaseInput from "./BaseInput";
import {FiEye, FiEyeOff} from "react-icons/fi";

declare interface PasswordInputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label: string
    left?: boolean
    error?: string
}

const PasswordInput: FC<PasswordInputProps> = ({label, left, error, ...HTMLAttributes}) => {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <label className={`${left && 'flex items-center'}`}>
            <p className="pl-1 my-1 mr-5 text-lg text-gray-200">
                {label}:
            </p>
            <div className="relative w-full">
                <BaseInput
                    type={showPassword ? "text": "password"}
                    {...HTMLAttributes}
                />
                <div
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-3.5 right-0 items-center pr-3 h-full text-gray-400 hover:text-gray-200 cursor-pointer">
                    {showPassword ? (
                        <FiEyeOff/>
                    ) : (
                        <FiEye/>
                    )}
                </div>
                <p className="absolute -bottom-5 left-0 pl-1 mt-1 text-xs font-bold text-red-500 select-none">
                    {error}
                </p>
            </div>
        </label>
    )
}

export default PasswordInput
