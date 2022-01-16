import React, {FC} from "react";
import Userbar from "../components/common/userbar/Userbar";
import Header from "../components/common/header/Header"

interface DefaultLayoutProps {
    children: React.ReactNode
}

const NavbarLayout: FC<DefaultLayoutProps> = ({children}) => {
    return (
        <div className="min-h-screen text-gray-200 bg-dark-dark font-poppins">
            <Userbar username="tsuuukiii" />
            <Header />
            <main>
                {children}
            </main>
        </div>
    )
}

export default NavbarLayout
