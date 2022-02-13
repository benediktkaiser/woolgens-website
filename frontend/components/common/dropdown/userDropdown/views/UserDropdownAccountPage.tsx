import React, {FC} from "react";
import {RiSettings2Line, RiProfileLine, RiNotification3Line} from "react-icons/ri";
import DropdownItem from "../../DropdownItem";
import {Transition} from "@headlessui/react"
import {MdArrowBackIos} from "react-icons/md"
import Link from "next/link"

declare interface UserDropdownStartPageProps {
    selectedPage: string,
    changePage: (page: string) => void,
}

const UserDropdownAccountPage: FC<UserDropdownStartPageProps> = ({selectedPage, changePage}) => {
    return (
        <Transition
            show={selectedPage === "account"}
            enter="transition-opacity duration-200 delay-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave=""
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            className="w-full shrink-0"
        >

            <DropdownItem onClick={() => changePage("start")} title="Back" icon={<MdArrowBackIos className="opacity-50" size="1rem"/>} />
            <hr className="my-2 border-gray-700"/>

            <Link href="/settings" passHref={true}>
                <a>
                    <DropdownItem title="Settings" icon={<RiSettings2Line size="1.5rem"/>} />
                </a>
            </Link>
            <Link href="/settings/preferences" passHref={true}>
                <a>
                    <DropdownItem title="Preferences" icon={<RiProfileLine size="1.5rem"/>} />
                </a>
            </Link>
            <Link href="/settings/notifications" passHref={true}>
                <a>
                    <DropdownItem title="Notifications" icon={<RiNotification3Line size="1.5rem"/>} />
                </a>
            </Link>
        </Transition>
    )
}

export default UserDropdownAccountPage
