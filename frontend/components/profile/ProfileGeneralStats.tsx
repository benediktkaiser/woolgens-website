import StatsCard from "../stats/StatsCard";
import CardWithHeader from "../common/cards/CardWithHeader";
import {FC} from "react";

declare interface ProfileGeneralStatsProps {
    user?: FullUser
    selectedSeason: string
}

const ProfileGeneralStats: FC<ProfileGeneralStatsProps> = ({ user, selectedSeason }) => {

    if (!user) {
        return (
            <div className="h-64 rounded-md shadow animate-pulse bg-dark-light/50" />
        )
    }

    return (
        <CardWithHeader title="General Stats">
            <div className="flex flex-col gap-4">
                <StatsCard title="Playtime" value={(user.minecraftUser.stats.playtime / 1000 / 60 / 60).toFixed(1)} label="Hours" />
                <StatsCard title="Joined" value={new Date(user.minecraftUser.joined).toDateString()} />
                <StatsCard title="Land" value={user.minecraftUser.land.name} link="/clan" />
                <StatsCard title="Balance" value={user.minecraftUser.seasons[selectedSeason].balance.toFixed(0)} label="$" />
            </div>
        </CardWithHeader>
    )
}

export default ProfileGeneralStats
