import React, {FC} from "react";
import {RiUser3Line, RiLifebuoyLine, RiLogoutBoxRLine} from "react-icons/ri"
import Avatar from "../../../Avatar";
import DropdownItem from "../../DropdownItem";
import {Transition} from "@headlessui/react"

declare interface UserDropdownStartPageProps {
    selectedPage: string,
    changePage: (page: string) => void,
    webUser: WebUser;
}

const UserDropdownStartPage: FC<UserDropdownStartPageProps> = ({ selectedPage, changePage, webUser }) => {
    return (
        <Transition
            show={selectedPage === "start"}
            enter="transition-opacity duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transform transition duration-300"
            leaveFrom="translate-x-0 opacity-100"
            leaveTo="-translate-x-20 opacity-0">

            <div className="flex items-center p-3 mb-2 hover:bg-dark-light rounded-lg cursor-pointer">
                <Avatar player={webUser.uuid} size={50} />
                <span className="ml-3 font-avenir">
                    <h1 className="text-xl">
                        {webUser.name}
                    </h1>
                    <h3 className="text-sm opacity-50">
                        View your profile
                    </h3>
                </span>
            </div>

            <hr className="my-2 border-gray-700"/>

            <DropdownItem onClick={() => changePage("account")} title="Account" icon={<RiUser3Line size="1.5rem" />} withArrow={true}/>
            <DropdownItem onClick={() => changePage("support")} title="Support" icon={<RiLifebuoyLine size="1.5rem" />} withArrow={true}/>
            <DropdownItem title="Logout" icon={<RiLogoutBoxRLine size="1.5rem" />}/>
        </Transition>
    )
}

export default UserDropdownStartPage
