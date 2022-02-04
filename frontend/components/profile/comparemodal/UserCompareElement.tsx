import {FC} from "react";
import UserCompareElementBlank from "./UserCompareElementBlank";
import Bust from "../../common/Bust";
import StatsCard from "../../stats/StatsCard";
import {formatMillisecondsToTime, formatMoney} from "../../../core/formatters";

interface UserCompareElementProps {
    user?: User
}

const UserCompareElement: FC<UserCompareElementProps> = ({user}) => {

    const season = "2"

    if (!user) {
        return <UserCompareElementBlank />
    }

    return (
        <div className="w-full text-center">
            <div className="flex gap-4 justify-center items-center">
                <Bust uuid={user.minecraftUser.uuid} size={120} />
                <h1 className="text-4xl text-gray-200 font-avenir">
                    {user.minecraftUser.name}
                </h1>
            </div>
            <div className="flex flex-col gap-4 p-5 bg-shark-400 rounded-lg min-h-[300px] font-poppins">
                <StatsCard title="Playtime" value={formatMillisecondsToTime(user.minecraftUser.stats.playtime, true)} />
                <StatsCard title="Joined" value={new Date(user.minecraftUser.joined).toDateString()} />
                <StatsCard title="Balance" value={formatMoney(user.minecraftUser.seasons[season].balance)} label="$" />
                <StatsCard title="Level" value={formatMoney(user.minecraftUser.seasons[season].level)} />
                <h1 className="text-xl">Skills</h1>
                <StatsCard title="Attack Points" value={formatMoney(user.minecraftUser.seasons[season].skills.base.ATTACK)} />
                <StatsCard title="Defense Points" value={formatMoney(user.minecraftUser.seasons[season].skills.base.DEFENSE)} />
                <StatsCard title="Mining Points" value={formatMoney(user.minecraftUser.seasons[season].skills.farming.MINING)} />
                <StatsCard title="Fishing Points" value={formatMoney(user.minecraftUser.seasons[season].skills.farming.FISHING)} />
                <StatsCard title="Lumberjack Points" value={formatMoney(user.minecraftUser.seasons[season].skills.farming.LUMBERJACK)} />
                <StatsCard title="Agriculture Points" value={formatMoney(user.minecraftUser.seasons[season].skills.farming.AGRICULTURE)} />
            </div>
        </div>
    )
}

export default UserCompareElement
