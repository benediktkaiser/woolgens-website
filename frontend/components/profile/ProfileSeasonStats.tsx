import React, {FC} from "react";
import {GiTwoCoins, GiUpgrade, GiTiedScroll} from "react-icons/gi";
import ProfileStatsCard from "./ProfileStatsCard";
import {formatMoney} from "../../core/formatters";

declare interface ProfileSeasonStatsProps {
    user?: User
    selectedSeason: string,
}

const ProfileSeasonStats: FC<ProfileSeasonStatsProps> = ({user, selectedSeason}) => {

    if (!user) {
        return <div/>
    }

    return (
        <div className="p-1 bg-gradient-to-l rounded-xl from-red-700/20 to-red-600/40">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pb-2">
                <ProfileStatsCard icon={<GiTwoCoins size="3rem" className="group-hover:text-yellow-500"/>} title="Balance"
                                  value={`${formatMoney(user.minecraftUser.seasons[selectedSeason].balance)}$`}/>
                <ProfileStatsCard icon={<GiUpgrade size="3rem" className="group-hover:text-blue-500"/>} title="Level"
                                  value={`${user.minecraftUser.seasons[selectedSeason].level}`}/>
                <ProfileStatsCard icon={<GiTiedScroll size="3rem" className="group-hover:text-red-500"/>} title="Quests"
                                  value={`${Object.keys(user.minecraftUser.seasons[selectedSeason].quests.finished).length}`}/>
            </div>
        </div>
    )
}

export default ProfileSeasonStats
