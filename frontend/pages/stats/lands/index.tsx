import {observer} from "mobx-react-lite";
import NavbarLayout from "../../../layout/NavbarLayout";
import React, {useEffect, useState} from "react";
import StatsUserSearchBar from "../../../components/stats/searchbar/StatsUserSearchBar";
import userStore from "../../../stores/UserStore";
import landStore from "../../../stores/LandStore";
import Announcement from "../../../components/common/Announcement";
import {FiBox} from "react-icons/fi";
import {BaseButton} from "../../../components/common/BaseButton";
import {AiOutlineArrowRight} from "react-icons/ai";
import LandStatsContainer from "../../../components/stats/LandStatsContainer";
import Link from "next/link"

const LandsIndexPage = observer(() => {
    const [autocompleteList, setAutocompleteList] = useState(undefined)
    const seasonNumber = process.env.NEXT_PUBLIC_CURRENT_SEASON || "1"

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
    }, [seasonNumber])

    return (
        <NavbarLayout>
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
                <LandStatsContainer/>
            </div>
        </NavbarLayout>
    )
})

export default LandsIndexPage
