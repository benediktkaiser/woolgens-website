import React, {FC} from "react";
import Userbar from "../components/common/userbar/Userbar";

interface DefaultLayoutProps {
    children: React.ReactNode
}

const NavbarLayout: FC<DefaultLayoutProps> = ({children}) => {
    return (
        <div className="min-h-screen text-gray-200 bg-dark-dark font-poppins">
            <Userbar username="tsuuukiii" />
            <main>
                {children}
            </main>
        </div>
    )
}

export default NavbarLayout
