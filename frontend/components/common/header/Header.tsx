import Image from "next/image";
import Background from "../../../public/background/mine_day.png";
import React from "react";
import styles from "./Header.module.css"

const Header = () => {
    return (
        <header className={`${styles.Header} relative h-[500px]`}>
            <Image src={Background} alt="Woolgens Network Background" layout="fill" />
            <div className={styles.Overlay} />
        </header>
    )
}

export default Header
