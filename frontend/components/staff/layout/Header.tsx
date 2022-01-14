import React from "react";
import UserDropdown from "./UserDropdown";
import {GiHamburgerMenu} from "react-icons/gi";

const Header = () => {
    return (
        <div className="w-full bg-dark-light">
            <div className="container flex justify-end items-center mx-auto space-x-2 h-20">
                <div className="lg:hidden flex-grow">
                    <GiHamburgerMenu size="2rem" />
                </div>
                <UserDropdown username="TsukiDev" />
            </div>
        </div>
    )
}

export default Header
