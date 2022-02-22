import {observer} from "mobx-react-lite";
import NavbarLayout from "../../../layout/NavbarLayout";
import React, {useEffect} from "react";
import {GetServerSideProps} from "next";
import StatsUserSearchBar from "../../../components/stats/StatsUserSearchBar";
import Announcement from "../../../components/common/Announcement";
import {FiBox} from "react-icons/fi";
import Link from "next/link";
import {BaseButton} from "../../../components/common/BaseButton";
import {AiOutlineArrowRight} from "react-icons/ai";
import LandTopLists from "../../../components/stats/land/LandTopLists";
import autoCompleteStore from "../../../stores/AutoCompleteStore";
import {getLandsSorted} from "../../../core/land";
import SEO from "../../../components/SEO";

const LandsIndexPage: NextPageWithLayout = observer(({ topLands }) => {

    useEffect(() => {
        autoCompleteStore.fetchUserList().catch(error => console.error(error))
        autoCompleteStore.fetchLandList().catch(error => console.error(error))
    })

    return (
        <div>
            <SEO seo={{
                title: "Lands",
                description: "On our lands portal you can view the top lands of the server. These are the best groups of players and ultimately, those most likely to win the season!",
                imageSRC: "/seo/Lands.jpg"
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

LandsIndexPage.getLayout = function getLayout(page) {
    return (
        <NavbarLayout>
            {page}
        </NavbarLayout>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const topLands = await getLandsSorted('bank.balance', 0, 10);

    return {
        props: {
            topLands: topLands || [],
        },
    }
}

export default LandsIndexPage
