import StatsCard from "../StatsCard";
import CardWithHeader from "../../common/cards/CardWithHeader";
import {FC} from "react";

declare interface LandGeneralStatsProps {
    land: Land
}

const LandGeneralStats: FC<LandGeneralStatsProps> = ({land}) => {
    if (!land) {
        return <div className="h-44 rounded-md shadow animate-pulse bg-dark-light/50" />
    }

    return (
        <CardWithHeader title="General Stats">
            <div className="flex flex-col gap-4">
                <StatsCard title="Balance" value={land.bank.balance} label="$" />
                <StatsCard title="Members" value={land.orderedMembers.length + 1} label="Members" />
                <StatsCard title="Created" value={new Date(land.registered).toDateString()} />

            </div>
        </CardWithHeader>
    )
}

export default LandGeneralStats
