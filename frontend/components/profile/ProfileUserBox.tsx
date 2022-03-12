import Image from "next/image"
import background from "../../public/background/mine_inside.jpeg"
import Bust from "../common/Bust";
import SkillsBadge from "./skills/SkillsBadge";
import {getHighestSkill, getLevelProgressPercentage, SKILL_TITLES} from "../../core/skills";
import OnlinePing from "../common/OnlinePing";
import {COLOR_CODES} from "../../core/constants";

interface ProfileUserBoxProps {
    user: User
    seasonNumber: string
}

function ProfileUserBox({user, seasonNumber}: ProfileUserBoxProps) {
    const highestSkill = getHighestSkill(user.minecraftUser.seasons[seasonNumber].skills)

    return (
        <div className="p-4 w-full bg-dark-light rounded-lg">
            <div className="overflow-hidden relative rounded-lg h-[200px]">
                <Image className="invisible lg:visible select-none" src={background} alt="profile background" />
                <div className="absolute top-0 w-full h-full bg-gradient-to-l to-gray-500/60 from-green-900/50" />
                <div className="absolute top-1/2 right-2 md:right-10 mt-1 -translate-y-1/2">
                    <SkillsBadge skill={highestSkill} />
                </div>
                <div className="md:hidden absolute top-0 w-full h-full bg-gradient-to-r to-accent-200/70 from-accent-500/50" />
                <div className="flex absolute bottom-0 lg:-bottom-2 2xl:bottom-0 left-0 items-center px-8 pt-4 w-full h-full">
                    <div className="hidden lg:block">
                        <Bust uuid={user.minecraftUser.uuid} size={225} />
                    </div>
                    <div className="w-full">
                        <span className="text-md" style={{color: COLOR_CODES[user.webUser?.group.color]}}>
                            {user.webUser?.group.name || SKILL_TITLES[highestSkill]}
                        </span>
                        <h1 className="flex items-center text-3xl sm:text-5xl font-bold">
                            {user.minecraftUser.name}
                        </h1>
                        <div className="overflow-hidden relative mt-2 w-full sm:w-80 rounded-full bg-dark-light/50">
                            <div className="absolute py-0.5 w-full h-full text-sm leading-3 text-gray-100 bg-green-700 rounded-l-full"
                                style={{width: `${getLevelProgressPercentage(user.minecraftUser.seasons[seasonNumber].level, user.minecraftUser.seasons[seasonNumber].exp)}%`}} />
                            <p className="relative z-10 py-1 ml-3 font-sans leading-none">
                                Lvl. {user.minecraftUser.seasons[seasonNumber].level}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex absolute bottom-1.5 left-2">
                    <OnlinePing status={`${user.liveUser ? 'online' : 'offline'}`} />
                </div>
            </div>
        </div>
    )
}

export default ProfileUserBox
