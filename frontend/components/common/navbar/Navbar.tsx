import React from "react";
import {useRouter} from "next/router";
import NavbarLink from "./NavbarLink";

import {FiShoppingCart} from "react-icons/fi"
import {RiMenu2Line} from "react-icons/ri"


const Navbar = () => {
    const router = useRouter()

    return (
        <div className="w-full shadow bg-dark-light/30">
            <div className="container flex justify-between items-center py-4 mx-auto">
                <ul className="flex md:gap-1 items-center">
                    <li className="md:hidden p-2 mt-1 hover:bg-dark-light rounded-2xl cursor-pointer select-none">
                        <RiMenu2Line size="2rem"/>
                    </li>
                    <NavbarLink title="Home" pathName={router ? router.pathname : ""} link="/" />
                    <NavbarLink title="Forum" pathName={router ? router.pathname : ""} link="/forum" />
                    <NavbarLink title="Stats" pathName={router ? router.pathname : ""} link="/stats" />
                    <NavbarLink title="Vote" pathName={router ? router.pathname : ""} link="/vote" />
                </ul>
                <ul className="flex gap-x-6 items-center">
                    <li className="flex items-center py-3 px-8 hover:bg-accent rounded-2xl cursor-pointer select-none bg-accent/90">
                        <FiShoppingCart className="mr-2" />
                        Shop
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
