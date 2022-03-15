import LandMemberRow from "./LandMemberRow";
import BasicCard from "../../common/cards/BasicCard";
import OverflowScrollbar from "../../common/OverflowScrollbar";

const LandMembersList = ({land}: {land: Land}) => {
    if (!land) {
        return <div className="p-4 w-full bg-dark-light rounded-md animate-pulse h-[200px]" />
    }

    return (
        <BasicCard withTabs={true}>
            <OverflowScrollbar maxHeight="max-h-[500px]">
                <ul className="flex flex-col">
                    <LandMemberRow member={land.owner} />
                    {land.members.map((member, index) =>
                        <LandMemberRow key={index} member={member} />
                    )}
                </ul>
            </OverflowScrollbar>
        </BasicCard>
    )
}

export default LandMembersList
