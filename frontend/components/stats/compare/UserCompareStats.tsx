import {FC} from "react";
import UserCompareStatRow from "./UserCompareStatRow";
import {GiTwoCoins, GiUpgrade, GiStopwatch, GiGroundSprout, GiStarMedal, GiAxeInStump, GiBorderedShield, GiBroadsword, GiFishingHook, GiWarPick, GiWheat} from "react-icons/gi";
import {formatMillisecondsToTime} from "../../../core/formatters";


interface UserCompareStatsProps {
    user: User
}

const UserCompareStats: FC<UserCompareStatsProps> = ({user}) => {
    const season = "2"

    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-2xl">
                General Stats:
            </h1>
            <UserCompareStatRow
                title="Playtime"
                icon={<GiStopwatch />}
                value={user.minecraftUser.stats?.playtime ? formatMillisecondsToTime(user.minecraftUser.stats?.playtime, true) : 0}
            />
            <UserCompareStatRow
                title="Join date"
                icon={<GiGroundSprout />}
                value={new Date(user.minecraftUser.joined).toDateString()}
            />
            <UserCompareStatRow
                title="Participated in"
                icon={<GiStarMedal />}
                value={Object.keys(user.minecraftUser.seasons).length}
                label="Seasons"
            />
            <h1 className="mt-4 text-2xl">
                Season {season} Stats:
            </h1>
            <UserCompareStatRow
                title="Level"
                icon={<GiUpgrade />}
                value={user.minecraftUser.seasons[season]?.level}
            />
            <UserCompareStatRow
                title="Balance"
                icon={<GiTwoCoins />}
                value={user.minecraftUser.seasons[season]?.balance}
            />
            <UserCompareStatRow
                title="Attack Skill points"
                icon={<GiBroadsword />}
                value={user.minecraftUser.seasons[season]?.skills.base.ATTACK}
            />
            <UserCompareStatRow
                title="Defensive Skill points"
                icon={<GiBorderedShield />}
                value={user.minecraftUser.seasons[season]?.skills.base.DEFENSE}
            />
            <UserCompareStatRow
                title="Lumber Skill points"
                icon={<GiAxeInStump />}
                value={user.minecraftUser.seasons[season]?.skills.farming.LUMBERJACK}
            />
            <UserCompareStatRow
                title="Fishing Skill points"
                icon={<GiFishingHook />}
                value={user.minecraftUser.seasons[season]?.skills.farming.FISHING}
            />
            <UserCompareStatRow
                title="Mining Skill points"
                icon={<GiWarPick />}
                value={user.minecraftUser.seasons[season]?.skills.farming.MINING}
            />
            <UserCompareStatRow
                title="Farming Skill points"
                icon={<GiWheat />}
                value={user.minecraftUser.seasons[season]?.skills.farming.AGRICULTURE}
            />
        </div>
    )
}

export default UserCompareStats
