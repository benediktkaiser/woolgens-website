import React from "react";
import {RiUser3Line, RiLogoutBoxRLine, RiHomeHeartLine, RiDashboard3Line} from "react-icons/ri"
import {Transition} from "@headlessui/react"
import Link from "next/link"
import Avatar from "../../../../common/Avatar";
import DropdownItem from "../../../../common/dropdown/DropdownItem";
import authStore from "../../../../../stores/AuthStore";
import {COLOR_CODES} from "../../../../../core/constants";

interface UserDropdownStartPage {
    selectedPage: string,
    changePage: (page: string) => void,
    user: User
}

const UserDropdownStartPage = ({selectedPage, changePage, user}: UserDropdownStartPage) => {
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
                    <Avatar player={user.uuid} size={50}/>
                    <div className="ml-3">
                        <h1 className="text-xl font-semibold">
                            {user.name}
                        </h1>
                        <h3 className="text-sm" style={{color: COLOR_CODES[user.webUser.group.color]}}>
                            {user.webUser.group.name}
                        </h3>
                    </div>
                </a>
            </Link>

            <hr className="my-2 border-gray-700"/>

            <Link href={`/profile/${user.name}`} passHref={true}>
                <a>
                    <DropdownItem title="Profile" icon={<RiUser3Line size="1.3rem"/>} />
                </a>
            </Link>
            {user.webUser.group.isStaff && (
                <DropdownItem onClick={() => changePage("staff")} title="Staff Tools" icon={<RiDashboard3Line size="1.3rem"/>} withArrow={true}/>
            )}
            {user.minecraftUser?.land ? (
                <Link href={`/stats/lands/${user.minecraftUser.land.id}`} passHref={true}>
                    <a>
                        <DropdownItem title="Land" icon={<RiHomeHeartLine size="1.3rem"/>}/>
                    </a>
                </Link>
            ) : (
                <DropdownItem title="Land" icon={<RiHomeHeartLine size="1.3rem"/>} disabled={true} />
            )}
            <DropdownItem onClick={() => authStore.logout()} title="Logout" icon={<RiLogoutBoxRLine size="1.3rem"/>}/>
        </Transition>
    )
}

export default UserDropdownStartPage
