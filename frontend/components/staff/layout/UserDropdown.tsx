import React, {FC, Fragment} from "react";
import {Menu, Transition} from "@headlessui/react";
import {BsChevronDown} from "react-icons/bs";

declare interface UserDropdownProps {
    username: string,
}

const UserDropdown: FC<UserDropdownProps> = ({username}) => {

    return (
        <Menu as="div" className="inline-block relative text-left">
            <div>
                <Menu.Button>
                    <div className="inline-flex items-center w-full">
                        <span className="pr-3">{username}</span>
                        <BsChevronDown size="1rem" className="ml-1.5"/>
                    </div>
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
                <Menu.Items className="overflow-hidden absolute right-0 p-3 mt-2 w-80 bg-dark rounded-md ring-1 ring-black ring-opacity-5 shadow-lg origin-top-right focus:outline-none">
                    <div className="flex items-center p-2.5 mb-2 border-b-2 border-gray-700 cursor-pointer">
                        <span className="ml-3 font-avenir">
                            <h1 className="text-xl">
                                TsukiDev
                            </h1>
                            <h3 className="text-sm">
                                Developer
                            </h3>
                        </span>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}

export default UserDropdown
