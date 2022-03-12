import React, {useEffect, useState} from "react";
import {HiChevronDown} from "react-icons/hi"
import { Transition } from '@headlessui/react'

interface SidebarDropDownLinkProps {
    icon: React.ReactNode;
    title: string,
    pathName: string,
    link: string,
    children?: React.ReactNode
}

const isLinkActive = (link: string, pathName: string) => {
    if (link === "/staff") {
        return pathName === "/staff";
    }
    return pathName.startsWith(link)
}

const SidebarDropDownLink = ({icon, title, pathName, link, children}: SidebarDropDownLinkProps) => {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        if (isLinkActive(link, pathName)) {
            setOpen(true)
        } else {
            setOpen(false)
        }
    }, [link, pathName])

    return (
        <li className="overflow-hidden">
            <div className="group relative z-10 py-2 px-6 bg-dark" onClick={() => setOpen(!open)}>
                <a className="transition-colors duration-150">
                <span className={`${open ? 'text-gray-200': 'text-gray-500'} inline-flex justify-between items-center w-full group-hover:text-gray-200 cursor-pointer`}>
                    <div className="inline-flex items-center space-x-3">
                        {icon}
                        <span className="font-avenir mt-[3px]">
                            {title}
                        </span>
                    </div>
                    <HiChevronDown size="1.3rem" className={`transition ${open && 'rotate-180'}`} />
                </span>
                </a>
            </div>
            <Transition
                appear={true}
                show={open}
                enter="transition duration-200"
                enterFrom="-translate-y-full opacity-0"
                enterTo="translate-y-0 opacity-100"
                leave="transition duration-200"
                leaveFrom="translate-y-0 opacity-100"
                leaveTo="-translate-y-full opacity-0"
            >
                <ul className="flex overflow-hidden flex-col pt-0.5 mx-3 bg-dark-light rounded-lg">
                    {children}
                </ul>
            </Transition>
        </li>
    )
}

export default SidebarDropDownLink
