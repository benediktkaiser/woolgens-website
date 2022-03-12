import React from "react";
import {RiChat1Line, RiHome2Line} from "react-icons/ri";
import {Transition} from "@headlessui/react"
import {MdArrowBackIos} from "react-icons/md"
import Link from "next/link"
import DropdownItem from "../../../../common/dropdown/DropdownItem";

interface UserDropdownStaffPage {
    selectedPage: string,
    changePage: (page: string) => void,
}

const UserDropdownStaffPage = ({selectedPage, changePage}: UserDropdownStaffPage) => {
    return (
        <Transition
            show={selectedPage === "staff"}
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
            <Link href="/staff" passHref={true}>
                <a>
                    <DropdownItem title="Dashboard" icon={<RiHome2Line size="1.5rem"/>}/>
                </a>
            </Link>
            <Link href="/staff/chatlogs" passHref={true}>
                <a>
                    <DropdownItem title="Chatlogs" icon={<RiChat1Line size="1.5rem"/>}/>
                </a>
            </Link>
        </Transition>
    )
}

export default UserDropdownStaffPage
