import React from "react";
import Image from "next/image"
import Link from "next/link"
import logo from "../../public/logo.png";

interface LogoProps {
    width?: string,
    height?: string,
    animated?: boolean,
}

const Logo = ({width = "200px", height = "200px", animated = false}: LogoProps) => {
    return (
        <div className={`${animated && 'animate-grow'}`}>
            <Link href="/" passHref={true}>
                <a>
                    <Image width={width} height={height} src={logo} alt="WoolGens" className="png-shadow" />
                </a>
            </Link>
        </div>
    )
}

export default Logo
