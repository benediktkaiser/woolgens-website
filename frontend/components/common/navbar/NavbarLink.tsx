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
        <li className={`group items-center py-3 px-2 md:px-6 hover:bg-dark-light rounded-2xl cursor-pointer select-none ${!isLinkActive(pathName, link) ? 'hidden md:flex' : 'md:bg-dark-light'}`}>
            {icon}
            <span className="text-lg">
                {title}
            </span>
        </li>
    )
}

export default NavbarLink
