import React, {FC} from "react";
import Userbar from "../components/common/userbar/Userbar";
import Header from "../components/common/header/Header"
import Navbar from "../components/common/navbar/Navbar";
import Footer from "../components/common/footer/Footer";

interface DefaultLayoutProps {
    children: React.ReactNode
}

const NavbarLayout: FC<DefaultLayoutProps> = ({children}) => {
    return (
        <div className="min-h-screen text-gray-200 bg-dark-dark font-poppins">
            <Userbar username="tsuuukiii" />
            <Header />
            <Navbar />
            <main className="container mx-auto mt-5 min-h-[58vh]">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default NavbarLayout
