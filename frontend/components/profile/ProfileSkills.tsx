import SkillsCard from "./skills/SkillsCard";
import {FC} from "react";

declare interface SkillsCardProps {
    user?: FullUser
    selectedSeason: string,
}

const ProfileSkills: FC<SkillsCardProps> = ({user, selectedSeason}) => {

    if (!user) {
        return (
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
                <div className="h-32 rounded-xl animate-pulse bg-dark-light/50">
                    <span className="text-gray-400 group-hover:text-gray-100" />
                    <h1 className="mt-2 text-lg font-bold" />
                    <h2 className="text-sm" />
                </div>
                <div className="h-32 rounded-xl animate-pulse bg-dark-light/50">
                    <span className="text-gray-400 group-hover:text-gray-100" />
                    <h1 className="mt-2 text-lg font-bold" />
                    <h2 className="text-sm" />
                </div>
                <div className="h-32 rounded-xl animate-pulse bg-dark-light/50">
                    <span className="text-gray-400 group-hover:text-gray-100" />
                    <h1 className="mt-2 text-lg font-bold" />
                    <h2 className="text-sm" />
                </div>
                <div className="h-32 rounded-xl animate-pulse bg-dark-light/50">
                    <span className="text-gray-400 group-hover:text-gray-100" />
                    <h1 className="mt-2 text-lg font-bold" />
                    <h2 className="text-sm" />
                </div>
                <div className="h-32 rounded-xl animate-pulse bg-dark-light/50">
                    <span className="text-gray-400 group-hover:text-gray-100" />
                    <h1 className="mt-2 text-lg font-bold" />
                    <h2 className="text-sm" />
                </div>
                <div className="h-32 rounded-xl animate-pulse bg-dark-light/50">
                    <span className="text-gray-400 group-hover:text-gray-100" />
                    <h1 className="mt-2 text-lg font-bold" />
                    <h2 className="text-sm" />
                </div>
            </div>
        )
    }

    return (
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
            <SkillsCard level={user.minecraftUser.seasons[selectedSeason].skills.base.ATTACK}
                        skill="ATTACK"/>
            <SkillsCard level={user.minecraftUser.seasons[selectedSeason].skills.base.DEFENSE}
                        skill="DEFENSE"/>
            <SkillsCard level={user.minecraftUser.seasons[selectedSeason].skills.farming.AGRICULTURE}
                        skill="AGRICULTURE"/>
            <SkillsCard level={user.minecraftUser.seasons[selectedSeason].skills.farming.FISHING}
                        skill="FISHING"/>
            <SkillsCard level={user.minecraftUser.seasons[selectedSeason].skills.farming.MINING}
                        skill="MINING"/>
            <SkillsCard level={user.minecraftUser.seasons[selectedSeason].skills.farming.LUMBERJACK}
                        skill="LUMBERJACK"/>
        </div>
    )
}

export default ProfileSkills
