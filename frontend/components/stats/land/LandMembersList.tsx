import CardWithHeader from "../../common/cards/CardWithHeader";
import {FC} from "react";
import LandMemberRow from "./LandMemberRow";

declare interface LandMembersListProps {
    land: Land
}

const LandMembersList: FC<LandMembersListProps> = ({land}) => {
    if (!land) {
        return <div className="p-4 w-full bg-dark-light rounded-md animate-pulse h-[200px]" />
    }

    return (
        <CardWithHeader title="Members">
            <ul className="flex overflow-auto flex-col max-h-[400px]">
                <LandMemberRow member={land.owner} />
                {land.orderedMembers.map((member, index) =>
                    <LandMemberRow key={index} member={member} />
                )}
            </ul>
        </CardWithHeader>
    )
}

export default LandMembersList
