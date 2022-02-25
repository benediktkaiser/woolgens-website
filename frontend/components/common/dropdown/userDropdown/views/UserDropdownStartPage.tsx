import React, {FC} from "react";
import {RiUser3Line, RiLogoutBoxRLine, RiHomeHeartLine, RiDashboard3Line} from "react-icons/ri"
import Avatar from "../../../Avatar";
import DropdownItem from "../../DropdownItem";
import {Transition} from "@headlessui/react"
import Link from "next/link"
import authStore from "../../../../../stores/AuthStore";
import {COLOR_CODES} from "../../../../../core/constants";

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
                    <div className="ml-3 font-avenir">
                        <h1 className="text-xl">
                            {user.name}
                        </h1>
                        <h3 className="text-sm font-light" style={{color: COLOR_CODES[user.webUser.group.color]}}>
                            {user.webUser.group.name}
                        </h3>
                    </div>
                </a>
            </Link>

            <hr className="my-2 border-gray-700"/>

            <DropdownItem onClick={() => changePage("account")} title="Account" icon={<RiUser3Line size="1.3rem" />} withArrow={true}/>
            <DropdownItem onClick={() => changePage("land")} title="Land" icon={<RiHomeHeartLine size="1.3rem" />} withArrow={true}/>
            {user.webUser.group.isStaff && (
                <Link href="/staff" passHref={true}>
                    <a>
                        <DropdownItem title="Staff Panel" icon={<RiDashboard3Line size="1.3rem" />} />
                    </a>
                </Link>
            )}
            <DropdownItem onClick={() => authStore.logout()} title="Logout" icon={<RiLogoutBoxRLine size="1.3rem" />}/>
        </Transition>
    )
}

export default UserDropdownStartPage
