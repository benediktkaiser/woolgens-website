import React, {FC, Fragment, useState} from "react";
import {Menu, Transition} from "@headlessui/react";
import {BsChevronDown} from "react-icons/bs";
import Avatar from "../../../common/Avatar";
import UserDropdownStartPage from "./views/UserDropdownStartPage";
import UserDropdownAccountPage from "./views/UserDropdownAccountPage";
import UserDropdownLandPage from "./views/UserDropdownLandPage";

declare interface UserDropdownProps {
    user: User
}

const UserDropdown: FC<UserDropdownProps> = ({user}) => {
    const [page, setPage] = useState("start")

    const changePage = (page) => {
        setPage(page)
    }

    return (
        <Menu as="div" className="inline-block relative text-left tex">
             <Menu.Button className="py-2 px-3 hover:bg-dark rounded-lg">
                <div className="inline-flex items-center w-full">
                    <span className="pr-3 text-sm">{user.name}</span>
                    <Avatar player={user.uuid} size={25} />
                    <BsChevronDown size="0.75rem" className="ml-2"/>
                </div>
            </Menu.Button>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="flex overflow-hidden absolute right-0 z-10 p-3 mt-3 bg-dark-light rounded-md ring-1 ring-black ring-opacity-5 shadow-lg origin-top-right focus:outline-none w-[300px]">
                    <UserDropdownStartPage selectedPage={page} changePage={changePage}  user={user} />
                    <UserDropdownAccountPage selectedPage={page} changePage={changePage} />
                    <UserDropdownLandPage selectedPage={page} changePage={changePage} user={user} />
                </Menu.Items>
            </Transition>
        </Menu>
    )
}

export default UserDropdown
