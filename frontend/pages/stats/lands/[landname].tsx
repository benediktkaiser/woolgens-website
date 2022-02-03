import NavbarLayout from "../../../layout/NavbarLayout";
import React, {useEffect, useState} from "react";
import landStore from "../../../stores/LandStore";
import {useRouter} from "next/router";
import LandHeaderBar from "../../../components/stats/land/LandHeaderBar";
import LandMembersList from "../../../components/stats/land/LandMembersList";
import LandGeneralStats from "../../../components/stats/land/LandGeneralStats";
import BreadCrumbs from "../../../components/common/BreadCrumbs";
import BasicCard from "../../../components/common/cards/BasicCard";

const LandProfile: NextPageWithLayout = () => {
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

LandProfile.getLayout = function getLayout(page) {
    const seo = {
        title: "Land Stats",
        description: "Compare yourself to other lands of the Woolgens community and rise to the top of the leaderboard!"
    }

    return (
        <NavbarLayout seo={seo}>
            {page}
        </NavbarLayout>
    )
}

export default LandProfile
