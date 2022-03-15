import {GetServerSideProps} from "next";
import {CURRENT_SEASON} from "../../../core/constants";
import NavbarLayout from "../../../layout/NavbarLayout";
import React, {useEffect, useState} from "react";
import PaginationWrapper from "../../../components/common/pagination/PaginationWrapper";
import Pagination from "../../../components/common/pagination/Pagination";
import topListStore from "../../../stores/TopListStore";
import {observer} from "mobx-react-lite";
import TopListRow from "../../../components/stats/TopListRow";
import {getLatestSeasonStats} from "../../../core/user/minecraftUser";
import AnimatedFade from "../../../components/common/animations/AnimatedFade";
import Announcement from "../../../components/common/Announcement";
import BreadCrumbs from "../../../components/common/BreadCrumbs";
import {useRouter} from "next/router";
import {GiUpgrade} from "react-icons/gi";
import SEO from "../../../components/SEO";

const pagination = new Pagination({itemsPerPage: 10, showPagerNumbers: true, itemName: "players"})

const StatsBalancePage: NextPageWithLayout = observer(({currentSeason}: { currentSeason: string }) => {
    const router = useRouter()
    const [items, setItems] = useState<MinecraftUser[]>(undefined)

    useEffect(() => {
        topListStore.getFullTopList('balance', `seasons.${currentSeason}.level`).then(result => {
            pagination.setEntries(result, (items: MinecraftUser[]) => {
                setItems(items)
            })
        })
    }, [currentSeason])

    return (
        <div className="flex flex-col space-y-3">
            <SEO seo={{
                title: "Top Level",
                description: "On our stats page you can see the top players and lands on our server. Interact with awesome top lists to see the rise of new legends and maybe even yourself!",
                imageSRC: "/seo/Stats.jpg"
            }} />
            <div className="pl-1.5">
                <BreadCrumbs pathName={router ? router.asPath : ""} />
            </div>
            <Announcement
                icon={<GiUpgrade/>}
                text="Level Top List"
                iconStyles="bg-blue-500 text-white"
                rightComponent={<span className="pt-1 text-gray-500">
                    {pagination.currentEntries()}
                </span>}
            />
            <div className="px-3 pb-4 bg-dark-light rounded-md shadow">
                <PaginationWrapper pagination={pagination} loading={items === undefined} showEntries={false}>
                    <AnimatedFade>
                        {items && items.map((user, index) =>
                            <TopListRow
                                key={index}
                                minecraftUser={user}
                                label="Level"
                                value={getLatestSeasonStats(user).level}
                                place={(index + 1) + ((pagination.currentPage - 1) * pagination.config.itemsPerPage)}
                                showPlace={true}
                            />
                        )}
                    </AnimatedFade>
                </PaginationWrapper>
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

StatsBalancePage.getLayout = function getLayout(page) {
    return (
        <NavbarLayout>
            {page}
        </NavbarLayout>
    )
}

export default StatsBalancePage
