import React, {FC} from "react";

declare interface UserbarLinkProps {
    title: string,
    icon?: React.ReactNode,
    iconRight?: React.ReactNode,
    ping?: boolean,
}

const UserbarLink: FC<UserbarLinkProps> = ({title, ping = false, icon, iconRight}) => {
    return (
        <span className="flex items-center py-2 px-3 hover:bg-dark-light rounded-lg cursor-pointer">
                {icon && (
                    <span className="md:mr-2">
                        {icon}
                    </span>
                )}
            <span className="hidden md:flex text-sm">
                    {title}
                {ping && (
                    <span className="flex relative ml-1 w-2 h-2">
                          <span
                              className="inline-flex absolute w-full h-full bg-accent-400 rounded-full opacity-75 animate-ping"/>
                          <span className="inline-flex relative w-2 h-2 bg-accent-500 rounded-full"/>
                        </span>
                )}
                </span>
            {iconRight && (
                <span className="md:ml-2">
                        {iconRight}
                    </span>
            )}
            </span>
    )
}

export default UserbarLink
