import React, {FC, useEffect, useState} from "react";
import Userbar from "../components/common/userbar/Userbar";
import Header from "../components/common/header/Header"
import Navbar from "../components/common/navbar/Navbar";
import Footer from "../components/common/footer/Footer";
import authStore from "../stores/AuthStore";
import {observer} from "mobx-react-lite";
import MobileNavbar from "../components/common/mobileNavbar/MobileNavbar";
import informationStore from "../stores/InformationStore";
import HeadSEO from "../components/common/HeadSEO";

interface NavbarLayoutProps {
    children: React.ReactNode
    seo: {
        title: string,
        description?: string,
        imageSRC?: string
    }
}

const NavbarLayout: FC<NavbarLayoutProps> = observer(({seo, children}) => {
    const [mobileNavBarOpen, setMobileNavBarOpen] = useState(false)

    useEffect(() => {
        //informationStore.updateData().catch(error => console.error(error))
    })

    return (
        <div className={`min-h-screen text-gray-200 bg-dark-dark font-poppins`}>
            <HeadSEO seo={seo} />
            <Userbar user={authStore.user} />
            <Header
                onlineDiscord={informationStore.onlineDiscord}
                onlineMinecraft={informationStore.onlineMinecraft}
                discordInviteLink={informationStore.discordInviteLink}
            />
            <Navbar toggleMobileNavbar={() => setMobileNavBarOpen(!mobileNavBarOpen)} />
            <main className="container mx-auto mt-5 min-h-[51.8vh]">
                {children}
            </main>
            <Footer />
            <MobileNavbar isOpen={mobileNavBarOpen} toggleMobileNavbar={() => setMobileNavBarOpen(!mobileNavBarOpen)} />
        </div>
    )
})

export default NavbarLayout
