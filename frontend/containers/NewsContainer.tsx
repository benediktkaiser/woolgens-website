import CardWithHeader from "../components/common/cards/CardWithHeader";
import React, {useEffect} from "react";
import changeLogStore from "../stores/ChangeLogStore";
import {observer} from "mobx-react-lite";
import NewsCard from "../components/NewsCard";
import MCText from 'mctext-react'

const NewsContainer = observer(() => {
    useEffect(() => {
        changeLogStore.fetchChangeLogs().catch(error => console.error(error))
    }, [])

    return (
        <section className="flex xl:grid flex-col grid-cols-10 gap-4 mt-5">
            <main className="flex flex-col col-span-7 gap-4">
                {changeLogStore.changeLogs ?
                    changeLogStore.changeLogs.map((changelog, index) => <NewsCard key={index} changelog={changelog}/>) : (
                        <div className="flex flex-col gap-4">
                            <div className="bg-dark-light rounded-lg animate-pulse h-[200px]"/>
                            <div className="bg-dark-light rounded-lg animate-pulse h-[200px]"/>
                        </div>
                    )}
            </main>
            <aside className="col-span-3">
                <CardWithHeader title="How to play">
                    <div className="text-xl">
                        <MCText prefix="&" style={{fontFamily: "poppins"}}>
                            &7Welcome to the WoolGens homepage!
                        </MCText>
                    </div>
                </CardWithHeader>
            </aside>
        </section>
    )
})

export default NewsContainer
