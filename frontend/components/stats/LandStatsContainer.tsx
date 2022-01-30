import LandTopBox from "./land/LandTopBox";
import {useEffect, useState} from "react";
import topListStore from "../../stores/TopListStore";
import LandTopListRow from "./LandTopListRow";

const LandStatsContainer = () => {
    const [topLands, setTopLands] = useState<Land[]>(undefined)

    useEffect(() => {
        topListStore.getSimpleLandsTopList().then(result => {
            setTopLands(result)
        })
    }, [])

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

    return (
        <div className="my-4">
            <div className="hidden xl:grid grid-cols-3 gap-6 my-4">
                <LandTopBox land={topLands[0]} place={1}/>
                <LandTopBox land={topLands[1]} place={2}/>
                <LandTopBox land={topLands[3]} place={3}/>
            </div>
            <div className="p-4 bg-dark-light rounded-lg">
                {topLands.map((land, index) => <LandTopListRow key={index} land={land} place={index + 1}/>)}
            </div>
        </div>
    )
}

export default LandStatsContainer
