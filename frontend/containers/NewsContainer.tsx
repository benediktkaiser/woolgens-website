import CardWithHeader from "../components/common/cards/CardWithHeader";
import React, {useEffect, useState} from "react";
import changeLogStore from "../stores/ChangeLogStore";
import {observer} from "mobx-react-lite";
import NewsCard from "../components/NewsCard";

const NewsContainer = observer(() => {
    const [changeLogs, setChangeLogs] = useState<ChangeLog[] | undefined>(undefined)

    useEffect(() => {
        changeLogStore.getChangeLogs().then(result => {
            setChangeLogs(result)
        })
    }, [])

    return (
        <section className="flex xl:grid flex-col grid-cols-3 xl:grid-cols-4 gap-4 mt-5">
            <main className="flex flex-col col-span-3 gap-4">
                {changeLogs ?
                    changeLogs.map((changelog, index) => <NewsCard key={index} changelog={changelog}/>) : (
                        <div className="flex flex-col gap-4">
                            <div className="bg-dark-light rounded-lg animate-pulse h-[200px]"/>
                            <div className="bg-dark-light rounded-lg animate-pulse h-[200px]"/>
                        </div>
                    )}
            </main>
            <aside>
                <CardWithHeader title="Test Card">
                    Test Hi
                </CardWithHeader>
            </aside>
        </section>
    )
})

export default NewsContainer
