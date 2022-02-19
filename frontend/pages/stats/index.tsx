import {observer} from "mobx-react-lite";
import NavbarLayout from "../../layout/NavbarLayout";
import React from "react";
import {GetServerSideProps} from "next";
import userStore from "../../stores/UserStore";
import landStore from "../../stores/LandStore";
import StatsUserSearchBar from "../../components/stats/StatsUserSearchBar";
import Announcement from "../../components/common/Announcement";
import {FiUser} from "react-icons/fi";
import Link from "next/link";
import {BaseButton} from "../../components/common/BaseButton";
import {AiOutlineArrowRight} from "react-icons/ai";
import TopLists from "../../components/stats/TopLists";

const StatsIndexPage: NextPageWithLayout = observer(({ autoCompleteList, currentSeason }) => {
    return (
        <div>
            <div className="my-8 text-center">
                <div className="py-4">
                    <h1 className="text-4xl font-bold">
                        Player and Land Stats
                    </h1>
                </div>
                <StatsUserSearchBar autoCompleteItems={autoCompleteList}/>
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
    const userList = [...await userStore.getAllFormattedUserNames()]
    const landsList = [...userList, ...await landStore.getAllLandNames()]

    return {
        props: {
            currentSeason: process.env.NEXT_PUBLIC_CURRENT_SEASON || "1",
            autoCompleteList: landsList || []
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
