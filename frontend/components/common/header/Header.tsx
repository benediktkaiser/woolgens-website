import React from "react";
import styles from "./Header.module.css"
import HeaderSideBox from "./HeaderSideBox";

import {IoLogoDiscord, IoGameController} from "react-icons/io5"

const copyIP = () => {
    navigator.clipboard.writeText("play.woolgens.net").then(() => console.info("COPIED IP TO CLIPBOARD"))
}

const Header = () => {
    return (
        <header className="relative bg-center bg-cover h-[250px]" style={{backgroundImage: "url('/background/mine_day.png')"}}>
            <div className="absolute top-0 w-full h-full bg-gradient-to-b from-dark/80 to-accent/50" />
            <div className="container flex justify-between items-center pt-32 mx-auto w-full">
                <HeaderSideBox
                    title="play.woolgens.net"
                    subtitle="Click to copy!"
                    icon={<IoGameController className="text-green-500" size="2.75rem" />}
                    color="bg-green-500"
                    count={65}
                    onClick={copyIP}
                />
                <div className="mx-auto">
                    WOOLGENS LOGO HERE
                </div>
                <a href="https://woolgens.net" target="_blank" rel="noreferrer">
                    <HeaderSideBox
                        title="WoolGens Discord"
                        subtitle="Click to join!"
                        icon={<IoLogoDiscord className="text-blue-400" size="2.75rem" />}
                        color="bg-blue-400"
                        count={5}
                    />
                </a>
            </div>
        </header>
    )
}

export default Header
