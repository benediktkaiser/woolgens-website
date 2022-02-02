import React, {FC} from "react";
import {RiCoinsLine, RiHome2Line, RiSettings2Line} from "react-icons/ri";
import DropdownItem from "../../DropdownItem";
import {Transition} from "@headlessui/react"
import {MdArrowBackIos} from "react-icons/md"
import Link from "next/link"

declare interface UserDropdownLandPageProps {
    selectedPage: string,
    changePage: (page: string) => void,
    user: User
}

const UserDropdownLandPage: FC<UserDropdownLandPageProps> = ({selectedPage, changePage, user}) => {
    return (
        <Transition
            show={selectedPage === "land"}
            enter="transition-opacity duration-200 delay-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave=""
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            className="w-full shrink-0"
        >

            <DropdownItem onClick={() => changePage("start")} title="Back"
                          icon={<MdArrowBackIos className="opacity-50" size="1rem"/>}/>
            <hr className="my-2 border-gray-700"/>

            <Link href={`/stats/lands/${user.minecraftUser.land.id}`} passHref={true}>
                <DropdownItem title="Land Profile" icon={<RiHome2Line size="1.5rem"/>}/>
            </Link>
            <DropdownItem title="Settings" icon={<RiSettings2Line size="1.5rem"/>} />
            <DropdownItem title="Transactions" icon={<RiCoinsLine size="1.5rem"/>}/>
        </Transition>
    )
}

export default UserDropdownLandPage
