import {observer} from "mobx-react-lite";
import NavbarLayout from "../layout/NavbarLayout";
import React, {useEffect, useState} from "react";
import CardWithHeader from "../components/common/cards/CardWithHeader";
import NewsContainer from "../components/home/NewsContainer";
import changeLogStore from "../stores/ChangeLogStore";

const IndexPage = observer(() => {
    const [changeLogs, setChangeLogs] = useState<ChangeLog[] | undefined>(undefined)

    useEffect(() => {
        changeLogStore.getChangeLogs().then(result => {
            setChangeLogs(result)
        })
    }, [])

    return (
        <NavbarLayout>
            <section className="flex xl:grid flex-col grid-cols-3 xl:grid-cols-4 gap-4 mt-5">
                <main className="flex flex-col col-span-3 gap-4">
                    {changeLogs ?
                        changeLogs.map((changelog, index) => <NewsContainer key={index} changelog={changelog}/>) : (
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
        </NavbarLayout>
    )
})

export default IndexPage
