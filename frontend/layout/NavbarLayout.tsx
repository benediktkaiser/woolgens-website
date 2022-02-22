import React, {FC, useState} from "react";
import Userbar from "../components/common/userbar/Userbar";
import Header from "../components/common/header/Header"
import Navbar from "../components/common/navbar/Navbar";
import Footer from "../components/common/footer/Footer";
import authStore from "../stores/AuthStore";
import {observer} from "mobx-react-lite";
import MobileNavbar from "../components/common/mobileNavbar/MobileNavbar";
import informationStore from "../stores/InformationStore";

interface NavbarLayoutProps {
    children: React.ReactNode
}

const NavbarLayout: FC<NavbarLayoutProps> = observer(({children}) => {
    const [mobileNavBarOpen, setMobileNavBarOpen] = useState(false)

    return (
        <div className={`text-gray-200 bg-dark-dark font-poppins`}>
            <div className="flex flex-col justify-between min-h-screen">
                <div>
                    <Userbar user={authStore.user} loading={authStore.loading} />
                    <Header
                        onlineDiscord={informationStore.onlineDiscord}
                        onlineMinecraft={informationStore.onlineMinecraft}
                        discordInviteLink={informationStore.discordInviteLink}
                    />
                    <Navbar toggleMobileNavbar={() => setMobileNavBarOpen(!mobileNavBarOpen)} />
                    <main className="container mx-auto mt-5">
                        {children}
                    </main>
                </div>
                <Footer />
            </div>
            <MobileNavbar isOpen={mobileNavBarOpen} toggleMobileNavbar={() => setMobileNavBarOpen(!mobileNavBarOpen)} />
        </div>
    )
})

export default NavbarLayout
