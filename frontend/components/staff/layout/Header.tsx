import React, {FC} from "react";
import {GiHamburgerMenu} from "react-icons/gi";
import UserDropdown from "../../common/dropdown/userDropdown/UserDropdown";
import NotificationDropdown from "../../common/dropdown/notificationDropdown/NotificationDropdown";
import BreadCrumbs from "../../common/BreadCrumbs";

declare interface HeaderProps {
    toggleSidebar: () => void;
    user: User
    pathName: string
}

const Header: FC<HeaderProps> = ({ toggleSidebar, user, pathName }) => {
    return (
        <div className="w-full bg-dark lg:shadow lg:bg-dark/30">
            <div className="flex justify-end items-center mx-9 space-x-2 h-20">
                <div className="flex-grow">
                    <div className="lg:hidden">
                        <GiHamburgerMenu onClick={toggleSidebar} size="2rem" />
                    </div>
                    <div className="hidden lg:block">
                        <BreadCrumbs pathName={pathName}/>
                    </div>
                </div>
                <div className="flex gap-1 items-center">
                    <NotificationDropdown notifications={user.webUser.notifications} />
                    <UserDropdown user={user} />
                </div>
            </div>
        </div>
    )
}

export default Header
