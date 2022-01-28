import {Menu, Transition} from '@headlessui/react'
import React, {FC, Fragment} from 'react'
import {BsChevronDown} from "react-icons/bs"
import {BaseButton} from "../BaseButton";

declare interface DropdownProps extends React.HTMLAttributes<HTMLButtonElement>{
    children?: React.ReactNode,
    title: string
}

const Dropdown: FC<DropdownProps> = ({title, children, ...HTMLElements}) => {
    return (
        <Menu as="div" className="inline-block relative text-left">
            <div>
                <Menu.Button {...HTMLElements}>
                    <BaseButton type="dark-active">
                        <div className="inline-flex items-center w-full font-medium">
                            <span>{title}</span>
                            <BsChevronDown className="ml-1.5" />
                        </div>
                    </BaseButton>
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="overflow-hidden absolute right-0 z-40 mt-2 w-56 rounded-md divide-y divide-gray-100 ring-1 ring-black ring-opacity-5 shadow-lg origin-top-right focus:outline-none">
                    {children}
                </Menu.Items>
            </Transition>
        </Menu>
    )
}

export default Dropdown
