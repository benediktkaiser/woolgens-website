import {observer} from "mobx-react-lite";
import React, {useEffect} from "react";
import StaffLayout from "../../../layout/StaffLayout";
import SEO from "../../../components/SEO";
import ticketStore from "../../../stores/TicketStore";

const TicketsPage: NextPageWithLayout = observer(() => {

    useEffect(() => {
        ticketStore.fetchAllTickets().catch(error => console.error(error))
    }, [])

    return (
        <div>
            <SEO seo={{
                title: `Dashboard`
            }} />
            <ul>
                {Object.values(ticketStore.tickets).map((ticket, index) => (
                    <li key={index}>
                        {ticket.id}
                    </li>
                ))}
            </ul>
        </div>
    )
})

TicketsPage.getLayout = function getLayout(page) {
    return (
        <StaffLayout permission="staff">
            {page}
        </StaffLayout>
    )
}

export default TicketsPage
