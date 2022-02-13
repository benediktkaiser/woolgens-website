import Image from "next/image"
import logo from "../../public/logo.png";
import React, {FC} from "react";
import Link from "next/link"

declare interface LogoProps {
    width?: string,
    height?: string,
    animated?: boolean,
}

const Logo: FC<LogoProps> = ({width = "250px", height = "250px", animated = false}) => {
    return (
        <div className={`${animated && 'animate-grow'}`}>
            <Link href="/" passHref={true}>
                <a>
                    <Image width={width} height={height} src={logo} alt="WoolGens"/>
                </a>
            </Link>
        </div>
    )
}

export default Logo
