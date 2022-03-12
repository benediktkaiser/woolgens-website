import React from "react";
import Link from "next/link"

interface SidebarLinkProps {
    icon: React.ReactNode;
    title: string,
    pathName: string,
    link: string,
}

const isLinkActive = (pathName: string, link: string) => {
    if (link === "/staff") {
        return pathName === "/staff";
    }
    return pathName.startsWith(link)
}

const SidebarLink = ({icon, title, link, pathName}: SidebarLinkProps) => {

    return (
        <li className="group relative py-2 px-6">
            <Link href={link} passHref={true}>
                <a className="transition-colors duration-150">
                    {isLinkActive(pathName, link) ? (
                        <>
                            <div className="absolute inset-y-0 left-0 w-1 bg-blue-400 rounded-tr-lg rounded-br-lg" aria-hidden="true"/>
                            <span className="inline-flex items-center w-full font-semibold text-gray-200 cursor-pointer">
                                {icon}
                                <span className="ml-4">
                                    {title}
                                </span>
                            </span>
                        </>
                    ) : (
                        <span className="inline-flex items-center w-full font-semibold text-gray-500 group-hover:text-gray-200 cursor-pointer">
                            {icon}
                                <span className="ml-4">
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
