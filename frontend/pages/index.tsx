import {observer} from "mobx-react-lite";
import NavbarLayout from "../layout/NavbarLayout";
import React from "react";
import SEO from "../components/SEO"
import {GetServerSideProps} from "next";
import NewsCard from "../components/NewsCard";
import CardWithHeader from "../components/common/cards/CardWithHeader";
import McText from 'mctext-react'
import {fetchChangeLogs} from "../core/changelog";

const IndexPage: NextPageWithLayout = observer(({changeLogs}) => {
    return (
        <div>
            <SEO seo={{
                title: "News",
                description: "Welcome to the official Woolgens homepage! Here you can find news, statistics, interact with other users and learn more about our network.",
                imageSRC: "/seo/News.jpg"
            }} />
            <section className="flex xl:grid flex-col grid-cols-10 gap-4 mt-5">
                <main className="flex flex-col col-span-7 gap-4">
                    {changeLogs ?
                        changeLogs.map((changelog, index) => <NewsCard key={index} changelog={changelog}/>) : (
                            <div className="flex flex-col gap-4">
                                <div className="bg-dark-light rounded-lg animate-pulse h-[200px]"/>
                                <div className="bg-dark-light rounded-lg animate-pulse h-[200px]"/>
                            </div>
                        )}
                </main>
                <aside className="col-span-3">
                    <CardWithHeader title="How to play">
                        <div className="text-xl">
                            <McText prefix="&" style={{fontFamily: "poppins"}}>
                                &7Welcome to the WoolGens homepage!
                            </McText>
                        </div>
                    </CardWithHeader>
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
