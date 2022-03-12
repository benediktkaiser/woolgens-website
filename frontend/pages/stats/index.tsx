import {observer} from "mobx-react-lite";
import NavbarLayout from "../../layout/NavbarLayout";
import React, {useEffect} from "react";
import {GetServerSideProps} from "next";
import StatsUserSearchBar from "../../components/stats/StatsUserSearchBar";
import Announcement from "../../components/common/Announcement";
import {FiUser} from "react-icons/fi";
import Link from "next/link";
import BaseButton from "../../components/common/BaseButton";
import {AiOutlineArrowRight} from "react-icons/ai";
import TopLists from "../../components/stats/TopLists";
import autoCompleteStore from "../../stores/AutoCompleteStore";
import SEO from "../../components/SEO";
import {CURRENT_SEASON} from "../../core/constants";

const StatsIndexPage: NextPageWithLayout = observer(({currentSeason }) => {

    useEffect(() => {
        autoCompleteStore.fetchUserList().catch(error => console.error(error))
        autoCompleteStore.fetchLandList().catch(error => console.error(error))
    })

    return (
        <div>
            <SEO seo={{
                title: "Stats",
                description: "On our stats page you can see the top players and lands on our server. Interact with awesome top lists to see the rise of new legends and maybe even yourself!",
                imageSRC: "/seo/Stats.jpg"
            }} />
            <div className="my-8 text-center">
                <div className="py-4">
                    <h1 className="text-4xl font-bold">
                        Player and Land Stats
                    </h1>
                </div>
                <StatsUserSearchBar autoCompleteItems={[...autoCompleteStore.userList, ...autoCompleteStore.landList]}/>
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
                <TopLists seasonNumber={currentSeason}/>
            </div>
        </div>
    )
})

export const getServerSideProps: GetServerSideProps = async () => {
    return {
        props: {
            currentSeason: CURRENT_SEASON
        },
    }
}

StatsIndexPage.getLayout = function getLayout(page) {
    return (
        <NavbarLayout>
            {page}
        </NavbarLayout>
    )
}

export default StatsIndexPage
