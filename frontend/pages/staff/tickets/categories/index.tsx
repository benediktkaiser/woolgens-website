import {observer} from "mobx-react-lite";
import React, {useEffect, useState} from "react";
import StaffLayout from "../../../../layout/StaffLayout";
import SEO from "../../../../components/SEO";
import BasicCard from "../../../../components/common/cards/BasicCard";
import BaseButton from "../../../../components/common/BaseButton";
import ticketStore from "../../../../stores/TicketStore";
import CreateTicketCategoryModal from "../../../../components/staff/tickets/category/CreateTicketCategoryModal";
import CategoryRow from "../../../../components/staff/tickets/category/CategoryRow";

const TicketCategoryPage: NextPageWithLayout = observer(() => {
    const [createModalOpen, setCreateModalOpen] = useState(false)

    useEffect(() => {
        ticketStore.fetchTicketCategories().catch(error => console.error(error))
    }, [])

    return (
        <div className="container mx-auto">
            <SEO seo={{
                title: `Ticket Categories`
            }} />
            <header className="flex justify-between items-end mb-4">
                <h1 className="text-2xl font-bold">
                    Ticket Categories
                </h1>
                <BaseButton type="primary" onClick={() => setCreateModalOpen(true)}>
                    New Category
                </BaseButton>
            </header>
            <BasicCard>
                <main className="overflow-hidden rounded">
                    {Object.values(ticketStore.categories).map((category, index) => <CategoryRow key={index} category={category} />)}
                </main>
            </BasicCard>
            <CreateTicketCategoryModal isOpen={createModalOpen} toggleModal={() => setCreateModalOpen(!createModalOpen)} />
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
