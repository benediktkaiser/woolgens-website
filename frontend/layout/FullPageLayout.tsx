import React, {FC} from "react";
import AnimatedFade from "../components/common/animations/AnimatedFade";

interface FullPageLayoutProps {
    children: React.ReactNode
}

const FullPageLayout: FC<FullPageLayoutProps> = ({children}) => {
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
            <div className="flex absolute z-10 flex-col gap-4 justify-center items-center w-full h-full">
                {children}
            </div>
        </div>
    )
}

export default FullPageLayout
