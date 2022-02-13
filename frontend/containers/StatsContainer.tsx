import React, {useEffect, useState} from "react";
import userStore from "../stores/UserStore";
import landStore from "../stores/LandStore";
import StatsUserSearchBar from "../components/stats/StatsUserSearchBar";
import Announcement from "../components/common/Announcement";
import {FiUser} from "react-icons/fi";
import Link from "next/link";
import {BaseButton} from "../components/common/BaseButton";
import {AiOutlineArrowRight} from "react-icons/ai";
import TopLists from "../components/stats/TopLists";

const StatsContainer = () => {
    const [autocompleteList, setAutocompleteList] = useState(undefined)
    const seasonNumber = process.env.NEXT_PUBLIC_CURRENT_SEASON || "1"

    useEffect(() => {
        userStore.getAllFormattedUserNames().then((result) => {
            const list = [...result];
            landStore.getAllLandNames().then(result => {
                setAutocompleteList([...list, ...result])
            })
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
                <StatsUserSearchBar autoCompleteItems={autocompleteList}/>
            </div>
            <div>
                <div className="hidden lg:block">
                    <Announcement
                        icon={<FiUser/>}
                        text="You are currently viewing the player Top Lists! Check out our land Top Lists!"
                        rightComponent={
                            <Link href="/stats/lands" passHref={true}>
                                <a>
                                    <BaseButton type="primary">
                                    <span className="flex items-center">
                                        To the Land Top Lists
                                        <AiOutlineArrowRight className="ml-2"/>
                                    </span>
                                    </BaseButton>
                                </a>
                            </Link>
                        }
                        iconStyles="bg-blue-500 text-white"
                    />
                </div>
                <TopLists seasonNumber={seasonNumber}/>
            </div>
        </div>
    )
}

export default StatsContainer
