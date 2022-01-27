import React, {FC} from "react";
import {RiFolderShield2Line, RiFileAddLine, RiGroupLine} from "react-icons/ri";
import DropdownItem from "../../DropdownItem";
import {Transition} from "@headlessui/react"
import {MdArrowBackIos} from "react-icons/md"

declare interface UserDropdownStartPageProps {
    selectedPage: string,
    changePage: (page: string) => void,
}

const UserDropdownSupportPage: FC<UserDropdownStartPageProps> = ({selectedPage, changePage}) => {
    return (
        <Transition
            show={selectedPage === "support"}
            enter="transition-opacity duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transform transition duration-300"
            leaveFrom="translate-x-0 opacity-100"
            leaveTo="-translate-x-20 opacity-0">

            <DropdownItem onClick={() => changePage("start")} title="Back" icon={<MdArrowBackIos className="opacity-50" size="1.3rem"/>} withIconBackground={false}/>
            <hr className="my-2 border-gray-700"/>

            <DropdownItem title="My Tickets" icon={<RiFolderShield2Line size="1.5rem"/>}/>
            <DropdownItem title="New Ticket" icon={<RiFileAddLine size="1.5rem"/>} />
            <DropdownItem title="Applications" icon={<RiGroupLine size="1.5rem"/>} />
        </Transition>
    )
}

export default UserDropdownSupportPage
