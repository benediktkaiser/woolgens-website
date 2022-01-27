import React, {FC} from "react";
import {RiHomeHeartLine, RiMedalLine, RiSettings2Line} from "react-icons/ri";
import DropdownItem from "../../DropdownItem";
import {Transition} from "@headlessui/react"
import {MdArrowBackIos} from "react-icons/md"

declare interface UserDropdownStartPageProps {
    selectedPage: string,
    changePage: (page: string) => void,
}

const UserDropdownAccountPage: FC<UserDropdownStartPageProps> = ({selectedPage, changePage}) => {
    return (
        <Transition
            show={selectedPage === "account"}
            enter="transition-opacity duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transform transition duration-300"
            leaveFrom="translate-x-0 opacity-100"
            leaveTo="-translate-x-20 opacity-0">

            <DropdownItem onClick={() => changePage("start")} title="Back" icon={<MdArrowBackIos className="opacity-50" size="1.3rem"/>} withIconBackground={false}/>
            <hr className="my-2 border-gray-700"/>

            <DropdownItem title="Land" icon={<RiHomeHeartLine size="1.5rem"/>}/>
            <DropdownItem title="Stats" icon={<RiMedalLine size="1.5rem"/>} />
            <DropdownItem title="Settings" icon={<RiSettings2Line size="1.5rem"/>} />
        </Transition>
    )
}

export default UserDropdownAccountPage
