import React, {FC} from "react";
import {GiHamburgerMenu} from "react-icons/gi";

declare interface HeaderProps {
    toggleSidebar: () => void;
}

const Header: FC<HeaderProps> = ({ toggleSidebar }) => {
    return (
        <div className="w-full bg-dark-light">
            <div className="container flex justify-end items-center mx-auto space-x-2 h-20">
                <div className="lg:hidden flex-grow">
                    <GiHamburgerMenu onClick={toggleSidebar} size="2rem" />
                </div>
            </div>
        </div>
    )
}

export default Header
