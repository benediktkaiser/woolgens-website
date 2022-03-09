import React, {FC, useState} from "react";

interface InputWithPrefilledValueProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label: string,
    prefilledValue: string,
    left?: boolean
}

const InputWithPrefilledValue: FC<InputWithPrefilledValueProps> = ({label, prefilledValue, left,...HTMLAttributes}) => {
    const [focus, setFocus] = useState(false)

    return (
        <label className={`${left && 'flex items-center'}`}>
            <p className="pl-1 my-1 mr-5 text-lg text-gray-200">
                {label}:
            </p>
            <div className="relative w-full">
                <div className={`w-full bg-dark-light rounded border border-transparent transition duration-300 ${focus && 'ring-4 ring-gray-600'}`}>
                    <div className="flex p-2 w-full text-lg text-white item-center">
                        <p className="text-gray-400 select-none">
                            {prefilledValue}
                        </p>
                        <input
                            onFocus={() => setFocus(true)}
                            onBlur={() => setFocus(false)}
                            className="bg-transparent focus:ring-0 focus:outline-none"
                            {...HTMLAttributes}
                        />
                    </div>
                </div>
            </div>
        </label>
    )
}

export default InputWithPrefilledValue
