import UserCompareArrowRow from "./UserCompareArrowRow";
import AnimatedFade from "../../common/animations/AnimatedFade";

interface UserCompareArrowsProps {
    user1: User
    user2: User
    season: string;
}

const UserCompareArrows = ({user1, user2, season}: UserCompareArrowsProps) => {
    if (!user1 || !user2) {
        return (
            <div />
        )
    }

    return (
        <AnimatedFade>
            <div className="flex flex-col gap-4 pt-4">
                <div className="h-[32px]" />
                <UserCompareArrowRow value1={user1.minecraftUser.stats?.playtime} value2={user2.minecraftUser.stats?.playtime} />
                <UserCompareArrowRow value1={user2.minecraftUser.joined} value2={user1.minecraftUser.joined} />
                <UserCompareArrowRow value1={Object.keys(user1.minecraftUser.seasons).length} value2={Object.keys(user2.minecraftUser.seasons).length} />
                <div className="mt-4 h-[32px]" />
                <UserCompareArrowRow value1={user1.minecraftUser.seasons[season]?.level} value2={user2.minecraftUser.seasons[season]?.level} />
                <UserCompareArrowRow value1={user1.minecraftUser.seasons[season]?.balance} value2={user2.minecraftUser.seasons[season]?.balance} />
                <UserCompareArrowRow value1={user1.minecraftUser.seasons[season]?.skills?.base?.ATTACK} value2={user2.minecraftUser.seasons[season]?.skills?.base?.ATTACK} />
                <UserCompareArrowRow value1={user1.minecraftUser.seasons[season]?.skills?.base?.DEFENSE} value2={user2.minecraftUser.seasons[season]?.skills?.base?.DEFENSE} />
                <UserCompareArrowRow value1={user1.minecraftUser.seasons[season]?.skills?.farming?.LUMBERJACK} value2={user2.minecraftUser.seasons[season]?.skills?.farming?.LUMBERJACK} />
                <UserCompareArrowRow value1={user1.minecraftUser.seasons[season]?.skills?.farming?.FISHING} value2={user2.minecraftUser.seasons[season]?.skills?.farming?.FISHING} />
                <UserCompareArrowRow value1={user1.minecraftUser.seasons[season]?.skills?.farming?.MINING} value2={user2.minecraftUser.seasons[season]?.skills?.farming?.MINING} />
                <UserCompareArrowRow value1={user1.minecraftUser.seasons[season]?.skills?.farming?.AGRICULTURE} value2={user2.minecraftUser.seasons[season]?.skills?.farming?.AGRICULTURE} />
            </div>
        </AnimatedFade>
    )
}

export default UserCompareArrows
