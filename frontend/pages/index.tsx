import {observer} from "mobx-react-lite";
import NavbarLayout from "../layout/NavbarLayout";
import React, {useEffect, useState} from "react";
import SEO from "../components/SEO"
import {GetServerSideProps} from "next";
import NewsCard from "../components/NewsCard";
import BasicCard from "../components/common/cards/BasicCard";

import styles from "../styles/modules/minecraftButton.module.css"
import {fetchChangeLogs} from "../core/changelog";
import Announcement from "../components/common/Announcement";
import {ImNewspaper} from "react-icons/im"
import informationStore from "../stores/InformationStore";
import Pagination from "../components/common/pagination/Pagination";
import PaginationWrapper from "../components/common/pagination/PaginationWrapper";

const pagination = new Pagination({itemsPerPage: 2, showPagerNumbers: true, itemName: "changelogs"})

const IndexPage: NextPageWithLayout = observer(({changeLogs}) => {
    const [items, setItems] = useState<ChangeLog[]>(undefined)

    useEffect(() => {
        pagination.setEntries(changeLogs, (items: ChangeLog[]) => {
            setItems(items)
        })
    }, [changeLogs])

    return (
        <div>
            <SEO seo={{
                title: "News",
                description: "Welcome to the official Woolgens homepage! Here you can find news, statistics, interact with other users and learn more about our network.",
                imageSRC: "/seo/News.jpg"
            }}/>
            <section className="flex xl:grid flex-col grid-cols-10 gap-4 mt-5">
                <main className="col-span-7">
                    <Announcement
                        icon={<ImNewspaper/>}
                        text="Changelogs: The newest information around WoolGens!"
                        iconStyles="bg-green-500 text-white"
                    />
                    <PaginationWrapper pagination={pagination} loading={items === undefined}>
                        <div className="flex flex-col gap-4">
                            {items && items.map((changelog, index) =>
                                <NewsCard key={index} changelog={changelog}/>
                            )}
                        </div>
                    </PaginationWrapper>
                </main>
                <aside className="flex flex-col col-span-3 gap-3">
                    <BasicCard>
                        <h1 className="text-2xl text-accent-500 font-minecraft">
                            How to join:
                        </h1>
                        <p className="text-gray-300">
                            You can easily join our server with the following IP:
                        </p>
                        <div className="mt-4 w-full font-minecraft">
                            <input
                                className="px-4 pt-2 pb-1 w-full text-2xl bg-shark-800 border-2 border-shark-400"
                                value={process.env.NEXT_PUBLIC_MINECRAFT_IP}
                                disabled/>
                            <button className={`${styles.mcButton} mt-2 text-lg`}
                                    onClick={() => informationStore.copyIP()}>
                                Copy Address
                            </button>
                        </div>
                    </BasicCard>
                    <BasicCard>
                        <h1 className="text-2xl text-accent-500 font-minecraft">
                            About us:
                        </h1>
                        <div className="text-gray-300">
                            <p>
                                Woolgens is based on a <span className="font-bold">Gens system</span>, where you
                                earn money by placing generators over time and
                                with the right strategy you have a good chance to win one of our <span
                                className="font-bold">Season Payouts</span>, where
                                you
                                can win real money.
                            </p>
                            <p className="my-2">
                                Aside from the generators you can also find an amazing <span
                                className="font-bold">farming system</span>, allowing users to
                                make money
                                through mining, fishing, farming and many other professions. You will also find <span
                                className="font-bold">daily
                                quests</span> waiting for
                                you to help you level up and take over the entire server!
                            </p>
                            <p>
                                In order to facilitate a relaxed and enjoyable atmosphere, our team will work together
                                with the community
                                to ensure everyone can find their place on WoolGens! We cannot wait to welcome you in
                                our little family!
                            </p>
                        </div>
                    </BasicCard>
                </aside>
            </section>
        </div>
    )
})

export const getServerSideProps: GetServerSideProps = async () => {
    const changeLogs = await fetchChangeLogs()

    return {
        props: {
            changeLogs: changeLogs
        },
    }
}

IndexPage.getLayout = function getLayout(page) {
    return (
        <NavbarLayout>
            {page}
        </NavbarLayout>
    )
}

export default IndexPage
