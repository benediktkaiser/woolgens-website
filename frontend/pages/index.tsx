import {observer} from "mobx-react-lite";
import NavbarLayout from "../layout/NavbarLayout";
import React from "react";
import BasicCard from "../components/common/cards/BasicCard";
import CardWithHeader from "../components/common/cards/CardWithHeader";
import {FiBell} from "react-icons/fi";
import {BaseButton} from "../components/common/BaseButton";
import Announcement from "../components/common/Announcement";

const IndexPage = observer(() => {

    return (
        <NavbarLayout>
            <section className="grid grid-cols-4 gap-4 mt-5">
                <main className="flex flex-col col-span-3 gap-4">
                    <BasicCard>
                        Test Hi
                    </BasicCard>
                    <BasicCard>
                        Test Hi
                    </BasicCard>
                    <BasicCard>
                        Test Hi
                    </BasicCard>
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
