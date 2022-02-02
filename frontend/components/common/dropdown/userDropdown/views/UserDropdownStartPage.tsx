import React, {FC} from "react";
import {RiUser3Line, RiLogoutBoxRLine, RiHomeHeartLine} from "react-icons/ri"
import Avatar from "../../../Avatar";
import DropdownItem from "../../DropdownItem";
import {Transition} from "@headlessui/react"
import Link from "next/link"
import authStore from "../../../../../stores/AuthStore";

declare interface UserDropdownStartPageProps {
    selectedPage: string,
    changePage: (page: string) => void,
    user: User
}

const UserDropdownStartPage: FC<UserDropdownStartPageProps> = ({ selectedPage, changePage, user }) => {
    return (
        <Transition
            show={selectedPage === "start"}
            enter="transition-opacity duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transform transition duration-300"
            leaveFrom="translate-x-0 opacity-100"
            leaveTo="-translate-x-20 opacity-0"
            className="w-full shrink-0"
        >

            <Link href={`/profile/${user.name}`} passHref={true}>
                <a className="flex items-center p-3 mb-2 hover:bg-dark rounded-lg cursor-pointer">
                    <Avatar player={user.uuid} size={50} />
                    <span className="ml-3 font-avenir">
                    <h1 className="text-xl">
                        {user.name}
                    </h1>
                    <h3 className="text-sm opacity-50">
                        View your profile
                    </h3>
                </span>
                </a>
            </Link>

            <hr className="my-2 border-gray-700"/>

            <DropdownItem onClick={() => changePage("account")} title="Account" icon={<RiUser3Line size="1.3rem" />} withArrow={true}/>
            <DropdownItem onClick={() => changePage("land")} title="Land" icon={<RiHomeHeartLine size="1.3rem" />} withArrow={true}/>
            <DropdownItem onClick={() => authStore.logout()} title="Logout" icon={<RiLogoutBoxRLine size="1.3rem" />}/>
        </Transition>
    )
}

export default UserDropdownStartPage
