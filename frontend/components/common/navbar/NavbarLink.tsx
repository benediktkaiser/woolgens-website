import React, {FC} from "react";

declare interface NavBarLink {
    title: string,
    icon?: React.ReactNode
    link: string,
    pathName: string,
}

const isLinkActive = (pathName: string, link: string) => {
    if (link === "/") {
        return pathName === "/";
    }
    return pathName.startsWith(link)
}

const NavbarLink: FC<NavBarLink> = ({title, link, pathName, icon}) => {
    return (
        <li className={`group items-center py-3 px-3 md:px-6 hover:bg-dark-light rounded-2xl cursor-pointer select-none ${!isLinkActive(pathName, link) && 'hidden md:flex'}`}>
            {icon}
            <span className={`text-lg ${isLinkActive(pathName, link) && 'border-b-2 text-accent border-accent font-bold group-hover:border-accent-300 group-hover:text-accent-300'}`}>
                {title}
            </span>
        </li>
    )
}

export default NavbarLink
