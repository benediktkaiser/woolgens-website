import StatsCard from "../stats/StatsCard";
import CardWithHeader from "../common/cards/CardWithHeader";
import {FC} from "react";
import {formatMillisecondsToTime} from "../../core/formatters";
import {getPassedTime} from "../../core/formatters";

declare interface ProfileGeneralStatsProps {
    user?: User
}

const ProfileGeneralStats: FC<ProfileGeneralStatsProps> = ({ user }) => {

    if (!user) {
        return (
            <div className="h-64 rounded-md shadow animate-pulse bg-dark-light/50" />
        )
    }

    return (
        <CardWithHeader title="General Stats">
            <div className="flex flex-col gap-4">
                <StatsCard title="Playtime" value={formatMillisecondsToTime(user.minecraftUser.stats.playtime, true, true)} />
                <StatsCard title="Joined" value={new Date(user.minecraftUser.joined).toDateString()} />
                {user.minecraftUser.lastJoined !== 0 && (
                    <StatsCard title="Last Seen" value={user.liveUser ? "Now" : getPassedTime(new Date(user.minecraftUser.lastJoined))} label={!user.liveUser && ' ago'} />
                )}
                {user.minecraftUser.land && (
                    <StatsCard title="Land" value={user.minecraftUser.land.name} link={`/stats/lands/${user.minecraftUser.land.name}`} />
                )}
                <StatsCard title="Played Seasons" value={Object.keys(user.minecraftUser.seasons).length} />
            </div>
        </CardWithHeader>
    )
}

export default ProfileGeneralStats
