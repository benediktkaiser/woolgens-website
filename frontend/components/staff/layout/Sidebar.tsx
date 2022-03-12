import SidebarLink from "./SidebarLink";
import {HiHome, HiChatAlt, HiX, HiTicket} from "react-icons/hi"
import React from "react";
import Logo from "../../common/Logo";
import SidebarDropDownLink from "./SidebarDropDownLink";

interface SidebarProps {
    extended: boolean,
    pathName: string,
    toggleSidebar: () => void;
}

const Sidebar = ({extended = false, pathName = "", toggleSidebar}: SidebarProps) => {

    return (
        <div
            className={`fixed flex flex-col lg:static z-40 h-screen w-80 bg-dark transition-transform lg:transition-none ease-in-out duration-700 transform lg:transform-none ${!extended ? "-translate-x-80" : "translate-x-0"}`}>
            <div className="flex-grow">
                <div className="flex items-center px-6 h-28">
                    <div className="flex flex-grow gap-2 items-center">
                        <Logo height="60px" width="60px"/>
                        <div className="leading-none">
                            <h1 className="text-xl font-bold">
                                WoolGens
                            </h1>
                            <p className="text-sm text-gray-400">
                                Staff Panel
                            </p>
                        </div>
                    </div>
                    <div className="lg:hidden">
                        <HiX onClick={toggleSidebar} size="2rem"/>
                    </div>
                </div>

                <ul className="flex flex-col space-y-2">
                    <SidebarLink
                        icon={<HiHome size="1.2rem"/>}
                        title="Dashboard"
                        pathName={pathName}
                        link="/staff"
                    />
                    <SidebarLink
                        icon={<HiChatAlt size="1.2rem"/>}
                        title="ChatLogs"
                        pathName={pathName}
                        link="/staff/chatlogs"
                    />
                    <SidebarDropDownLink
                        icon={<HiTicket size="1.2rem"/>}
                        title="Tickets"
                        pathName={pathName}
                        link="/staff/tickets"
                    >
                        <SidebarLink
                            title="Tickets"
                            pathName={pathName}
                            link="/staff/tickets"
                            inDropDown={true}
                        />
                        <SidebarLink
                            title="Categories"
                            pathName={pathName}
                            link="/staff/tickets/categories"
                            inDropDown={true}
                        />
                        <SidebarLink
                            title="Statuses"
                            pathName={pathName}
                            link="/staff/tickets/statuses"
                            inDropDown={true}
                        />
                    </SidebarDropDownLink>
                </ul>
            </div>
            <p className="p-6 font-bold text-gray-500">
                Version 0.1.0
            </p>
        </div>
    )
}

export default Sidebar
