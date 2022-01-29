import NavbarLayout from "../../../layout/NavbarLayout";
import {useEffect, useState} from "react";
import landStore from "../../../stores/LandStore";
import {useRouter} from "next/router";
import LandHeaderBar from "../../../components/stats/land/LandHeaderBar";
import LandMembersList from "../../../components/stats/land/LandMembersList";
import LandGeneralStats from "../../../components/stats/land/LandGeneralStats";
import BreadCrumbs from "../../../components/common/BreadCrumbs";
import BasicCard from "../../../components/common/cards/BasicCard";

const LandProfile = () => {
    const router = useRouter()
    const {landname} = router.query

    const [land, setLand] = useState<Land | undefined>(undefined)

    useEffect(() => {
        if (landname) {
            landStore.getLand(landname).then((result: Land) => {
                setLand(result)
            })
        }
    }, [landname])


    return (
        <NavbarLayout>
            <BasicCard>
                <BreadCrumbs pathName={router ? router.asPath : ""}/>
            </BasicCard>
            <div className="flex flex-col gap-4 mt-4">
                <LandHeaderBar land={land}/>
                <main className="grid grid-cols-4 gap-4 items-start">
                    <LandGeneralStats land={land}/>
                    <div className="col-span-3">
                        <LandMembersList land={land}/>
                    </div>
                </main>
            </div>
        </NavbarLayout>
    )
}

export default LandProfile
