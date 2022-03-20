import {observer} from "mobx-react-lite";
import React from "react";
import {GetServerSideProps} from "next";
import SEO from "../../../components/SEO";
import NavbarLayout from "../../../layout/NavbarLayout";
import {getTicketCategoryById} from "../../../core/staff/tickets";
import authStore from "../../../stores/AuthStore";
import CreateTicket from "../../../components/tickets/CreateTicket";

const TicketCreatePage: NextPageWithLayout = observer(({category}: { category: TicketCategory }) => {
    return (
        <div>
            <SEO seo={{
                title: `${category.name}`
            }}/>
            {authStore.user && (
                <CreateTicket category={category} />
            )}
        </div>
    )
})

export const getServerSideProps: GetServerSideProps = async (context) => {
    const id = context.params['id']
    const category = await getTicketCategoryById(id.toString())

    return {
        props: {
            category: category || null,
        },
        notFound: !category
    }
}

TicketCreatePage.getLayout = function getLayout(page) {
    return (
        <NavbarLayout>
            {page}
        </NavbarLayout>
    )
}

export default TicketCreatePage
