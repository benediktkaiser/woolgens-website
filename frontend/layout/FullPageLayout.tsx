import React from "react";
import AnimatedFade from "../components/common/animations/AnimatedFade";

interface FullPageLayoutProps {
    children: React.ReactNode
}

const FullPageLayout = ({children}: FullPageLayoutProps) => {
    return (
        <div className="relative w-full h-screen bg-black">
            <AnimatedFade>
                <div
                    className="absolute z-0 w-full h-full bg-center bg-cover"
                    style={{
                        backgroundImage: 'url(/background/mine_inside2.jpeg)',
                        boxShadow: "inset 0 0 1500px black",
                        filter: "blur(5px)"
                    }}
                />
            </AnimatedFade>
            <div className="flex absolute -top-16 z-10 flex-col justify-center items-center w-full h-full">
                {children}
            </div>
        </div>
    )
}

export default FullPageLayout
