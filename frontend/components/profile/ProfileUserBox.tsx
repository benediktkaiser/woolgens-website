import {FC} from "react";
import Image from "next/image"

import background from "../../public/background/mine_day.png"
import Bust from "../common/Bust";
import SkillsBadge from "./skills/SkillsBadge";
import {getHighestSkill, getLevelProgressPercentage, SKILL_TITLES} from "../../core/skills";

declare interface ProfileUserBoxProps {
    user: FullUser
    seasonNumber: string
}

const ProfileUserBox: FC<ProfileUserBoxProps> = ({user, seasonNumber}) => {

    if (!user) {
        return (
            <div className="p-4 w-full bg-dark-light rounded-md animate-pulse">
                <div className="w-full h-52 bg-dark rounded-lg animate-pulse" />
            </div>
        )
    }

    const highestSkill = getHighestSkill(user.minecraftUser.seasons[seasonNumber].skills)

    return (
        <div className="p-4 w-full bg-dark-light rounded-lg">
            <div className="overflow-hidden relative h-52 rounded-lg">
                <Image src={background} alt="profile background" />
                <div className="absolute top-0 w-full h-full bg-gradient-to-r to-accent-200/70 from-accent-500/90" />
                <div className="absolute top-1/2 right-10 mt-1 -translate-y-1/2">
                    <SkillsBadge skill={highestSkill} />
                </div>
                <div className="flex absolute top-0 left-0 items-center px-8 pt-4">
                    <Bust uuid={user.minecraftUser.uuid} size={200} />
                    <div>
                        <span className="text-md">
                            {SKILL_TITLES[highestSkill]}
                        </span>
                        <h1 className="flex items-end text-5xl font-bold">
                            {user.minecraftUser.name}
                        </h1>
                        <div className="overflow-hidden relative mt-2 w-80 rounded-full bg-dark-light/50">
                            <div className="absolute py-0.5 pl-4 w-full h-full text-sm leading-none text-gray-100 bg-green-500 rounded-l-full"
                                style={{width: `${getLevelProgressPercentage(user.minecraftUser.seasons[seasonNumber].level, user.minecraftUser.seasons[seasonNumber].exp)}%`}} />
                            <p className="relative z-20 pt-1 pb-0.5 ml-2 leading-none">
                                Level {user.minecraftUser.seasons[seasonNumber].level}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileUserBox
