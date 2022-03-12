import React, {useState} from "react";
import authStore from "../stores/AuthStore";
import {observer} from "mobx-react-lite";
import informationStore from "../stores/InformationStore";
import MobileNavbar from "../components/layout/mobileNavbar/MobileNavbar";
import Userbar from "../components/layout/userbar/Userbar";
import Header from "../components/layout/header/Header";
import Navbar from "../components/layout/navbar/Navbar";
import Footer from "../components/layout/footer/Footer";

interface NavbarLayoutProps {
    children: React.ReactNode
}

const NavbarLayout = observer(({children}: NavbarLayoutProps) => {
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
