import StatsCard from "../stats/StatsCard";
import CardWithHeader from "../common/cards/CardWithHeader";
import {FC} from "react";
import {formatMillisecondsToTime, formatMoney} from "../../core/formatters";

declare interface ProfileGeneralStatsProps {
    user?: User
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
                <StatsCard title="Playtime" value={formatMillisecondsToTime(user.minecraftUser.stats.playtime, true)} />
                <StatsCard title="Joined" value={new Date(user.minecraftUser.joined).toDateString()} />
                {user.minecraftUser.land?.name && (
                    <StatsCard title="Land" value={user.minecraftUser.land.name} link={`/stats/lands/${user.minecraftUser.land.name}`} />
                )}
                <StatsCard title="Balance" value={formatMoney(user.minecraftUser.seasons[selectedSeason].balance)} label="$" />
            </div>
        </CardWithHeader>
    )
}

export default ProfileGeneralStats
