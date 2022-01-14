import React from "react";
import {observer} from "mobx-react-lite";
import { useRouter } from 'next/router'

import Sidebar from "../components/staff/layout/Sidebar";
import Header from "../components/staff/layout/Header";

declare interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode
}

const SidebarLayout: React.FC<SidebarProps> = observer(({ children, ...HTMLElements}) => {
    const router = useRouter()

    return (
        <main className="flex overflow-hidden h-screen text-gray-200 font-poppins">
            <Sidebar extended={false} pathName={router ? router.pathname : ""} />
            <div className={`${"hidden"} lg:hidden absolute z-30 w-full h-screen bg-black opacity-80`} />
            <main className="flex overflow-auto flex-col w-full min-h-screen bg-dark-dark">
                <Header />
                <div className="container flex-grow mx-auto mb-10">
                    <div {...HTMLElements} className={`flex-grow ${HTMLElements.className}`}>
                        {children}
                    </div>
                </div>
            </main>
        </main>
    )
});

export default SidebarLayout
