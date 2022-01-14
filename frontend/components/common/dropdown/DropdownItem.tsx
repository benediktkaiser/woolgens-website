import React, {FC} from "react";

declare interface DropdownItemProps extends React.HTMLAttributes<HTMLButtonElement> {
    title: string,
    icon?: React.ReactNode,
}

const DropdownItem: FC<DropdownItemProps> = ({title, icon, ...HTMLElements}) => {

    return (
        <button {...HTMLElements} className="flex items-center py-3 px-4 w-full text-left hover:bg-dark-light rounded-lg">
            {icon && (
                <span className="mr-2">
                    {icon}
                </span>
            )}
            <div className="flex-grow">
                {title}
            </div>
        </button>
    )
}

export default DropdownItem
