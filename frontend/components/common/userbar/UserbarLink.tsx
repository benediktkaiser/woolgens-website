import React, {FC} from "react";
import Link from "next/link"

declare interface UserbarLinkProps {
    title: string,
    to?: string,
    icon?: React.ReactNode,
    iconRight?: React.ReactNode,
    ping?: boolean,
}

const UserbarLink: FC<UserbarLinkProps> = ({ title, to = "#", ping = false, icon, iconRight }) => {
    return (
        <Link href={to} passHref={true}>
            <span className="flex items-center py-2 px-3 hover:bg-dark rounded-lg cursor-pointer">
                {icon && (
                    <span className="md:mr-2">
                        {icon}
                    </span>
                )}
                <span className="hidden md:flex text-sm">
                    {title}
                    {ping && (
                        <span className="flex relative ml-1 w-2 h-2">
                          <span className="inline-flex absolute w-full h-full rounded-full opacity-75 animate-ping bg-sky-400" />
                          <span className="inline-flex relative w-2 h-2 rounded-full bg-sky-500" />
                        </span>
                    )}
                </span>
                {iconRight && (
                    <span className="md:ml-2">
                        {iconRight}
                    </span>
                )}
            </span>
        </Link>
    )
}

export default UserbarLink
