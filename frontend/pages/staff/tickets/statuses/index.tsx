import {observer} from "mobx-react-lite";
import React, {useEffect, useState} from "react";
import StaffLayout from "../../../../layout/StaffLayout";
import SEO from "../../../../components/SEO";
import BasicCard from "../../../../components/common/cards/BasicCard";
import BaseButton from "../../../../components/common/BaseButton";
import ticketStore from "../../../../stores/TicketStore";
import StatusRow from "../../../../components/staff/tickets/status/StatusRow";
import CreateTicketStatusModal from "../../../../components/staff/tickets/status/CreateTicketStatusModal";

const TicketStatusPage: NextPageWithLayout = observer(() => {
    const [createModalOpen, setCreateModalOpen] = useState(false)

    useEffect(() => {
        ticketStore.fetchTicketStatuses().catch(error => console.error(error))
    }, [])

    return (
        <div className="container mx-auto">
            <SEO seo={{
                title: `Ticket Categories`
            }} />
            <header className="flex justify-between items-end mb-4">
                <h1 className="text-2xl font-bold">
                    Ticket Statuses
                </h1>
                <BaseButton type="primary" onClick={() => setCreateModalOpen(true)}>
                    New Status
                </BaseButton>
            </header>
            <BasicCard>
                <main className="overflow-hidden rounded">
                    {Object.values(ticketStore.statuses).map((status, index) => <StatusRow key={index} status={status} />)}
                </main>
            </BasicCard>
            <CreateTicketStatusModal isOpen={createModalOpen} toggleModal={() => setCreateModalOpen(!createModalOpen)} />
        </div>
    )
})

TicketStatusPage.getLayout = function getLayout(page) {
    return (
        <StaffLayout permission="staff">
            {page}
        </StaffLayout>
    )
}

export default TicketStatusPage
