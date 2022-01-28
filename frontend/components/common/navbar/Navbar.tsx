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
                <ul className="flex md:gap-2 items-center">
                    <li className="md:hidden p-2 hover:bg-dark-light rounded-2xl cursor-pointer select-none">
                        <RiMenu2Line size="2rem"/>
                    </li>
                    <NavbarLink title="Home" pathName={router ? router.pathname : ""} link="/" />
                    <NavbarLink title="Forum" pathName={router ? router.pathname : ""} link="/forum" />
                    <NavbarLink title="Stats" pathName={router ? router.pathname : ""} link="/stats" />
                    <NavbarLink title="Vote" pathName={router ? router.pathname : ""} link="/vote" />
                </ul>
                <ul className="flex gap-x-6 items-center">
                    <a className="flex items-center py-3 px-6 text-lg bg-accent rounded-xl cursor-pointer select-none hover:bg-accent/80">
                        <FiShoppingCart className="mr-2" />
                        Shop
                    </a>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
