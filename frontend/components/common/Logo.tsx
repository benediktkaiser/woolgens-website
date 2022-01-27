import Image from "next/image"
import logo from "../../public/logo.png";
import React, {FC} from "react";

declare interface LogoProps {
    width?: string,
    height?: string,
    animated?: boolean,
}

const Logo: FC<LogoProps> = ({width = "200px", height = "200px", animated = false}) => {
    return (
        <div className={`${animated && 'animate-grow'}`}>
            <Image width={width} height={height} src={logo} alt="WoolGens"/>
        </div>
    )
}

export default Logo
