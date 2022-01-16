import React, {FC} from "react";

interface BaseButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode,
    type: "primary" | "secondary" | "success" | "danger" | "dark",
}

export const BaseButton: FC<BaseButtonProps> = ({ type, children, ...HTMLAttributes}) => {

    const colors = {
        "primary": "text-white bg-indigo-500 hover:bg-indigo-700 focus:ring-indigo-400 disabled:hover:bg-indigo-500",
        "secondary": "text-white bg-gray-400 hover:bg-gray-600 focus:ring-gray-300 disabled:hover:bg-gray-400",
        "success": "text-white bg-green-500 hover:bg-green-700 focus:ring-green-400 disabled:hover:bg-green-500",
        "danger": "text-white bg-red-500 hover:bg-red-700 focus:ring-red-400 disabled:hover:bg-red-500",
        "dark": "text-white bg-dark-light hover:bg-gray-700 focus:ring-dark-light disabled:hover:bg-dark-light",
    }

    const classList = [
        colors[type],
        "py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-75 " +
        "cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
        HTMLAttributes.className,
    ];

    return (
        <button {...HTMLAttributes} className={classList.join(" ")}>
            { children }
        </button>
    )
}
