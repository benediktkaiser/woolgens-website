import {observer} from "mobx-react-lite";
import NavbarLayout from "../layout/NavbarLayout";
import React from "react";
import SEO from "../components/SEO"
import {GetServerSideProps} from "next";
import NewsCard from "../components/NewsCard";
import BasicCard from "../components/common/cards/BasicCard";

import styles from "../styles/modules/minecraftButton.module.css"
import {fetchChangeLogs} from "../core/changelog";
import Announcement from "../components/common/Announcement";
import {GiPartyPopper} from "react-icons/gi"
import informationStore from "../stores/InformationStore";

const IndexPage: NextPageWithLayout = observer(({changeLogs}) => {
    return (
        <div>
            <SEO seo={{
                title: "News",
                description: "Welcome to the official Woolgens homepage! Here you can find news, statistics, interact with other users and learn more about our network.",
                imageSRC: "/seo/News.jpg"
            }}/>
            <section className="flex xl:grid flex-col grid-cols-10 gap-4 mt-5">
                <main className="flex flex-col col-span-7 gap-4">
                    <Announcement
                        icon={<GiPartyPopper/>}
                        text="Welcome to the new WoolGens Website!"
                        iconStyles="bg-green-500 text-white"
                    />
                    {changeLogs ?
                        changeLogs.map((changelog, index) => <NewsCard key={index} changelog={changelog}/>) : (
                            <div className="flex flex-col gap-4">
                                <div className="bg-dark-light rounded-lg animate-pulse h-[200px]"/>
                                <div className="bg-dark-light rounded-lg animate-pulse h-[200px]"/>
                            </div>
                        )}
                </main>
                <aside className="flex flex-col col-span-3 gap-3">
                    <BasicCard>
                        <h1 className="text-2xl text-accent-500 font-minecraft">
                            How to join:
                        </h1>
                        You can easily join our server with the following IP:
                        <div className="mt-4 w-full font-minecraft">
                            <input
                                className="px-4 pt-2 pb-1 w-full text-2xl bg-shark-800 border-2 border-shark-400"
                                value="play.woolgens.net"
                                disabled />
                            <button className={`${styles.mcButton} mt-2 text-lg`} onClick={() => informationStore.copyIP()}>
                                Copy Address
                            </button>
                        </div>
                    </BasicCard>
                    <BasicCard>
                        <h1 className="text-2xl text-accent-500 font-minecraft">
                            About us:
                        </h1>
                        <p>
                            We are a large America based Minecraft Gens server with 5000+ Discord Members and Discord Partner status.
                            We are almost done with completely redesigning our server concept and will be releasing shortly.
                        </p>
                        <p className="mt-2">
                            We are a large America based Minecraft Gens server with 5000+ Discord Members and Discord Partner status.
                            We are almost done with completely redesigning our server concept and will be releasing shortly.
                        </p>
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
