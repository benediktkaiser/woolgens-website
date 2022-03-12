import React, {FC} from "react";
import HeaderSideBox from "./HeaderSideBox";
import {IoLogoDiscord, IoGameController} from "react-icons/io5"
import Logo from "../../common/Logo";
import informationStore from "../../../stores/InformationStore";

declare interface HeaderProps {
    onlineDiscord: number,
    onlineMinecraft: number
    discordInviteLink: string
}

const Header: FC<HeaderProps> = ({onlineDiscord, onlineMinecraft, discordInviteLink}) => {
    return (
        <header className="relative bg-center bg-cover bg-100 h-[220px]" style={{backgroundImage: "url('/background/tree.jpeg')"}}>
            <div className="absolute top-0 w-full h-full bg-gradient-to-b from-dark/80 to-accent/50" />
            <div className="container flex justify-between items-center pt-2 mx-auto w-full">
                <HeaderSideBox
                    title={process.env.NEXT_PUBLIC_MINECRAFT_IP}
                    subtitle="Click to copy!"
                    icon={<IoGameController className="text-green-500" size="2.5rem" />}
                    color="bg-green-500"
                    count={onlineMinecraft}
                    onClick={informationStore.copyIP}
                />
                <div className="mx-auto">
                    <Logo animated={true} />
                </div>
                <a href={discordInviteLink} target="_blank" rel="noreferrer">
                    <HeaderSideBox
                        title="WoolGens Discord"
                        subtitle="Click to join!"
                        icon={<IoLogoDiscord className="text-blue-400" size="2.5rem" />}
                        color="bg-blue-400"
                        count={onlineDiscord}
                    />
                </a>
            </div>
        </header>
    )
}

export default Header
