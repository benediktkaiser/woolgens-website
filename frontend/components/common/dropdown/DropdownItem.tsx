import React from "react";
import {MdArrowForwardIos} from "react-icons/md"

interface DropdownItem extends React.HTMLAttributes<HTMLButtonElement> {
    title: string,
    icon?: React.ReactNode,
    withArrow?: boolean,
    disabled?: boolean
}

const DropdownItem = ({title, icon, withArrow = false, disabled= false, ...HTMLElements}: DropdownItem) => {

    if (disabled) {
        return (
            <button {...HTMLElements} className="flex items-center py-3 px-2 w-full text-left bg-dark-light rounded-lg cursor-not-allowed">
                {icon && (
                    <span className={`rounded-full text-gray-500`}>
                        {icon}
                    </span>
                )}
                <span className="flex-grow ml-3 font-medium text-gray-500">
                    {title}
                </span>
                {withArrow && (
                    <MdArrowForwardIos className="text-gray-500 opacity-50" size="1.3rem" />
                )}
            </button>
        )
    }

    return (
        <button {...HTMLElements} className="flex items-center py-3 px-2 w-full text-left bg-dark-light hover:bg-dark rounded-lg">
            {icon && (
                <span className={`rounded-full text-gray-400`}>
                    {icon}
                </span>
            )}
            <span className="flex-grow ml-3 font-medium">
                {title}
            </span>
            {withArrow && (
                <MdArrowForwardIos className="opacity-50" size="1.3rem" />
            )}
        </button>
    )
}

export default DropdownItem
