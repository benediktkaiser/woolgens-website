import React from "react";
import {observer} from "mobx-react-lite";
import { useRouter } from 'next/router'

import Sidebar from "../components/staff/layout/Sidebar";
import Header from "../components/staff/layout/Header";
import staffStore from "../stores/StaffStore";
import authStore from "../stores/AuthStore";
import BreadCrumbs from "../components/common/BreadCrumbs";
import ErrorPage from "../components/ErrorPage";

declare interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
    permission?: string
    withBreadCrumbs?: boolean,
    children?: React.ReactNode
}

const SidebarLayout: React.FC<SidebarProps> = observer(({permission, withBreadCrumbs, children, ...HTMLElements}) => {
    const router = useRouter()

    if (authStore.loading) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    if (!authStore.hasPermission(permission)) {
        return <ErrorPage title="No permissions" subtitle="You do not have access to this page!" />
    }
    return (
        <main className="flex overflow-hidden h-screen text-gray-200 font-poppins">
            <Sidebar extended={staffStore.sidebarExtended} pathName={router ? router.pathname : ""} toggleSidebar={() => staffStore.toggleSidebar()} />
            <div onClick={() => staffStore.toggleSidebar()} className={`${!staffStore.sidebarExtended && "hidden"} lg:hidden absolute z-30 w-full h-screen bg-black opacity-80`} />
            <main className="flex overflow-auto flex-col w-full min-h-screen bg-dark-dark">
                <Header toggleSidebar={() => staffStore.toggleSidebar()} />
                <div className="flex-grow my-5 mx-10">
                    {withBreadCrumbs && (
                        <div>
                            <h1 className="text-4xl font-bold">Title</h1>
                            <BreadCrumbs pathName={router ? router.pathname: ""} />
                        </div>
                    )}
                    <div {...HTMLElements} className={`h-full flex-grow ${HTMLElements.className || ""}`}>
                        {children}
                    </div>
                </div>
            </main>
        </main>
    )
});

export default SidebarLayout
