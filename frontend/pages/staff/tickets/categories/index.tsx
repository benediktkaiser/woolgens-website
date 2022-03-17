import {observer} from "mobx-react-lite";
import React, {useEffect} from "react";
import StaffLayout from "../../../../layout/StaffLayout";
import SEO from "../../../../components/SEO";
import BasicCard from "../../../../components/common/cards/BasicCard";
import BaseButton from "../../../../components/common/BaseButton";
import ticketStore from "../../../../stores/TicketStore";

const TicketCategoryPage: NextPageWithLayout = observer(() => {
    useEffect(() => {
        ticketStore.fetchTicketCategories().catch(error => console.error(error))
    }, [])

    return (
        <div className="container mx-auto">
            <SEO seo={{
                title: `Ticket Categories`
            }} />
            <BasicCard>
                <header className="flex justify-between items-end pb-3 border-b-2 border-shark-400">
                    <h1 className="text-3xl font-bold">
                        Ticket Categories
                    </h1>
                    <BaseButton type="primary">
                        New Category
                    </BaseButton>
                </header>
                <main>
                    {Object.values(ticketStore.categories).map((category, index) => (
                        <li key={index}>
                            {category.name}
                        </li>
                    ))}
                </main>
            </BasicCard>
        </div>
    )
})

TicketCategoryPage.getLayout = function getLayout(page) {
    return (
        <StaffLayout permission="staff">
            {page}
        </StaffLayout>
    )
}

export default TicketCategoryPage
