import React from "react";
import Link from "next/link"

interface SidebarLinkProps {
    icon?: React.ReactNode;
    title: string,
    pathName: string,
    link: string,
    inDropDown?: boolean
}

const isLinkActive = (pathName: string, link: string, exact?: boolean) => {
    if (link === "/staff") {
        return pathName === "/staff";
    }
    if (exact) {
        return pathName === link
    }
    return pathName.startsWith(link)
}

const SidebarLink = ({icon, title, link, pathName, inDropDown}: SidebarLinkProps) => {

    return (
        <li className={`group relative ${inDropDown ? 'px-4' : 'px-6'} py-2`}>
            <Link href={link} passHref={true}>
                <a className="transition-colors duration-150">
                    {isLinkActive(pathName, link, inDropDown) ? (
                        <>
                            {!inDropDown && (
                                <div className="absolute inset-y-0 left-0 w-1 bg-blue-400 rounded-tr-lg rounded-br-lg" aria-hidden="true"/>
                            )}
                            <span className="inline-flex items-center space-x-3 w-full font-semibold text-gray-200 cursor-pointer">
                                {icon && icon}
                                <span>
                                    {title}
                                </span>
                            </span>
                        </>
                    ) : (
                        <span className="inline-flex items-center space-x-3 w-full font-semibold text-gray-500 group-hover:text-gray-200 cursor-pointer">
                            {icon && icon}
                            <span>
                                {title}
                            </span>
                        </span>
                    )}
                </a>
            </Link>
        </li>
    )
}

export default SidebarLink
