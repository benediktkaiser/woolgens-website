import React, {FC} from "react";
import Userbar from "../components/common/userbar/Userbar";
import Header from "../components/common/header/Header"
import Navbar from "../components/common/navbar/Navbar";
import Footer from "../components/common/footer/Footer";
import authStore from "../stores/AuthStore";
import {observer} from "mobx-react-lite";

interface NavbarLayoutProps {
    children: React.ReactNode
}

const NavbarLayout: FC<NavbarLayoutProps> = observer(({children}) => {

    return (
        <div className="min-h-screen text-gray-200 bg-dark-dark font-poppins">
            <Userbar webUser={authStore.webUser} />
            <Header />
            <Navbar />
            <main className="container mx-auto mt-5 min-h-[51.8vh]">
                {children}
            </main>
            <Footer />
        </div>
    )
})

export default NavbarLayout
