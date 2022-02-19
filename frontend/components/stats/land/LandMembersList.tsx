import {FC} from "react";
import LandMemberRow from "./LandMemberRow";
import BasicCard from "../../common/cards/BasicCard";

declare interface LandMembersListProps {
    land: Land
}

const LandMembersList: FC<LandMembersListProps> = ({land}) => {
    if (!land) {
        return <div className="p-4 w-full bg-dark-light rounded-md animate-pulse h-[200px]" />
    }

    return (
        <BasicCard withTabs={true}>
            <ul className="flex overflow-auto flex-col max-h-[400px]">
                <LandMemberRow member={land.owner} />
                {land.members.map((member, index) =>
                    <LandMemberRow key={index} member={member} />
                )}
            </ul>
        </BasicCard>
    )
}

export default LandMembersList
