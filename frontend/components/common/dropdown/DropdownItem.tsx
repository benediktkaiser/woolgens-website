import React, {FC} from "react";
import {MdArrowForwardIos} from "react-icons/md"

declare interface DropdownItemProps extends React.HTMLAttributes<HTMLButtonElement> {
    title: string,
    icon?: React.ReactNode,
    withArrow?: boolean,
    withIconBackground?: boolean,
}

const DropdownItem: FC<DropdownItemProps> = ({title, icon, withArrow = false, withIconBackground= true, ...HTMLElements}) => {

    return (
        <button {...HTMLElements} className="flex items-center py-3 px-2 w-full text-left hover:bg-dark-light rounded-lg">
            {icon && (
                <span className={`rounded-full ${withIconBackground ? 'p-3 bg-gray-700': 'ml-2'}`}>
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
