import React, {FC} from "react";

type BaseInputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const BaseInput: FC<BaseInputProps> = ({...HTMLAttributes}) => {
    return (
        <input
            className="p-2 w-full text-lg text-white disabled:text-gray-600 bg-dark-light rounded border border-transparent focus:ring-4 focus:ring-gray-600 transition duration-300 disabled:cursor-not-allowed focus:outline-none"
            {...HTMLAttributes}
        />
    )
}

export default BaseInput
