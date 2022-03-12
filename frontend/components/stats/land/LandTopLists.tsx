import LandTopBox from "./LandTopBox";
import LandTopListRow from "./LandTopListRow";
import BasicCard from "../../common/cards/BasicCard";

const LandTopLists= ({topLands}: {topLands: Land[]}) => {
    if (!topLands) {
        return (
            <div className="my-4">
                <div className="hidden xl:grid grid-cols-3 gap-6 my-4">
                    <div className="h-44 rounded-2xl animate-pulse bg-dark-light/50" />
                    <div className="h-44 rounded-2xl animate-pulse bg-dark-light/50" />
                    <div className="h-44 rounded-2xl animate-pulse bg-dark-light/50" />
                </div>
                <div className="bg-dark-light rounded-2xl animate-pulse h-[150px]" />
            </div>
        )
    }

    if (topLands.length === 0) {
        return (
            <div className="my-4">
                <BasicCard>
                    <span>
                        There are no lands registered yet!
                    </span>
                </BasicCard>
            </div>
        )
    }

    return (
        <div className="my-4">
            <div className="hidden xl:grid grid-cols-3 gap-6 my-4">
                <LandTopBox land={topLands[0]} place={1}/>
                <LandTopBox land={topLands[1]} place={2}/>
                <LandTopBox land={topLands[2]} place={3}/>
            </div>
            <div className="p-4 bg-dark-light rounded-lg">
                {topLands.map((land, index) => <LandTopListRow key={index} land={land} place={index + 1}/>)}
            </div>
        </div>
    )
}

export default LandTopLists
