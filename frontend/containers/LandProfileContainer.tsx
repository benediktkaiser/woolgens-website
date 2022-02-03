import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import landStore from "../stores/LandStore";
import BasicCard from "../components/common/cards/BasicCard";
import BreadCrumbs from "../components/common/BreadCrumbs";
import LandHeaderBar from "../components/stats/land/LandHeaderBar";
import LandGeneralStats from "../components/stats/land/LandGeneralStats";
import LandMembersList from "../components/stats/land/LandMembersList";

const LandProfileContainer = () => {
    const router = useRouter()
    const {landname} = router.query
    const [land, setLand] = useState(undefined)

    useEffect(() => {
        landStore.getLand(landname).then(result => setLand(result))
    })

    return (
        <div>
            <BasicCard>
                <BreadCrumbs pathName={router ? router.asPath : ""}/>
            </BasicCard>
            <div className="flex flex-col gap-4 mt-4">
                <LandHeaderBar land={land}/>
                <main className="grid grid-cols-1 2xl:grid-cols-4 2xl:gap-x-4 gap-y-4 items-start">
                    <LandGeneralStats land={land}/>
                    <div className="col-span-3">
                        <LandMembersList land={land}/>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default LandProfileContainer
