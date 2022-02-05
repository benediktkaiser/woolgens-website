import {FC} from "react";
import Image from "next/image";
import background from "../../../public/background/mine_night.jpeg";
import Bust from "../../common/Bust";

declare interface LandHeaderBarProps {
    land?: Land
}

const LandHeaderBar: FC<LandHeaderBarProps>= ({land}) => {

    if (!land) {
        return (
            <div className="p-4 w-full bg-dark-light rounded-md animate-pulse">
                <div className="w-full bg-dark rounded-lg animate-pulse h-[300px]" />
            </div>
        )
    }

    return (
        <div className="p-4 w-full bg-dark-light rounded-lg select-none">
            <div className="overflow-hidden relative rounded-lg md:h-[200px] lg:h-[300px]">
                <Image className="invisible 2xl:visible" src={background} alt="profile background" />
                <div className="absolute top-0 w-full h-full bg-gradient-to-r from-green-200/20 via-green-500/40 to-green-200/20" />
                <div className="flex absolute top-0 justify-center items-center w-full">
                    <h1 className="mt-2 font-bold leading-none uppercase text-[3rem] sm:text-[5rem] lg:text-[9rem] text-shadow">
                        {land.name}
                    </h1>
                </div>
                <div className="flex absolute -bottom-2 left-0 gap-2 justify-center items-baseline px-8 w-full">
                    <div className="w-[175px]">
                        {land.members[2] && (
                            <Bust uuid={land.members[2].uuid} size={175} />
                        )}
                    </div>
                    <div className="w-[190px]">
                        {land.members[0] && (
                            <Bust uuid={land.members[0].uuid} size={190} />
                        )}
                    </div>
                    <Bust uuid={land.owner.uuid} size={200} facing="forward" />
                    <div className="w-[190px]">
                        {land.members[1] && (
                            <Bust uuid={land.members[1].uuid} size={190} facing="left" />
                        )}
                    </div>
                    <div className="w-[175px]">
                        {land.members[3] && (
                            <Bust uuid={land.members[3].uuid} size={175} facing="left" />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandHeaderBar
