import {observer} from "mobx-react-lite";
import React, {useEffect, useState} from "react";
import userStore from "../stores/UserStore";
import landStore from "../stores/LandStore";
import StatsUserSearchBar from "../components/stats/StatsUserSearchBar";
import Announcement from "../components/common/Announcement";
import {FiBox} from "react-icons/fi";
import Link from "next/link";
import {BaseButton} from "../components/common/BaseButton";
import {AiOutlineArrowRight} from "react-icons/ai";
import LandTopLists from "../components/stats/land/LandTopLists";
import topListStore from "../stores/TopListStore";

const LandStatsContainer = observer(() => {
    const [autocompleteList, setAutocompleteList] = useState(undefined)
    const seasonNumber = process.env.NEXT_PUBLIC_CURRENT_SEASON || "1"
    const [topLands, setTopLands] = useState<Land[]>(undefined)

    useEffect(() => {
        userStore.getAllFormattedUserNames().then((result) => {
            let list = [
                ...result
            ];
            landStore.getAllLandNames().then(result => {
                list = [
                    ...list,
                    ...result
                ]
                setAutocompleteList(list)
            })
        })
        topListStore.getSimpleLandsTopList().then(result => {
            setTopLands(result)
        })
    }, [seasonNumber])

    return (
        <div>
            <div className="my-8 text-center">
                <div className="py-4">
                    <h1 className="text-4xl font-bold">
                        Player and Land Stats
                    </h1>
                </div>
                <StatsUserSearchBar items={autocompleteList}/>
            </div>
            <div>
                <div className="hidden lg:block">
                    <Announcement
                        icon={<FiBox/>}
                        text="You are currently viewing the lands Top Lists! Check out our player Top Lists!"
                        rightComponent={
                            <Link href="/stats" passHref={true}>
                                <a>
                                    <BaseButton type="success">
                                    <span className="flex items-center">
                                        To the Player Top list
                                        <AiOutlineArrowRight className="ml-2"/>
                                    </span>
                                    </BaseButton>
                                </a>
                            </Link>
                        }
                        iconStyles="bg-green-500 text-white"
                    />
                </div>
                <LandTopLists topLands={topLands} />
            </div>
        </div>
    )
})

export default LandStatsContainer
