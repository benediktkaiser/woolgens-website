import React, {FC, Fragment, useState} from "react";
import {Menu, Transition} from "@headlessui/react";
import {BsChevronDown} from "react-icons/bs";
import Avatar from "../../../common/Avatar";
import UserDropdownStartPage from "./views/UserDropdownStartPage";
import UserDropdownAccountPage from "./views/UserDropdownAccountPage";
import UserDropdownSupportPage from "./views/UserDropdownSupportPage";

declare interface UserDropdownProps {
    webUser: WebUser;
}

const UserDropdown: FC<UserDropdownProps> = ({webUser}) => {
    const [page, setPage] = useState("start")

    const changePage = (page) => {
        setPage("loading")
        setTimeout(() => {
            setPage(page)
        }, 310)
    }

    return (
        <Menu as="div" className="inline-block relative text-left tex">
             <Menu.Button className="py-2 px-3 hover:bg-dark rounded-lg">
                <div className="inline-flex items-center w-full">
                    <span className="pr-3 text-sm">{webUser.name}</span>
                    <Avatar player={webUser.uuid} size={25} />
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
                <Menu.Items className="overflow-hidden absolute right-0 z-10 p-3 mt-3 w-80 bg-dark rounded-md ring-1 ring-black ring-opacity-5 shadow-lg origin-top-right focus:outline-none">
                    <UserDropdownStartPage selectedPage={page} changePage={changePage}  webUser={webUser}/>
                    <UserDropdownAccountPage selectedPage={page} changePage={changePage} />
                    <UserDropdownSupportPage selectedPage={page} changePage={changePage} />
                </Menu.Items>
            </Transition>
        </Menu>
    )
}

export default UserDropdown
