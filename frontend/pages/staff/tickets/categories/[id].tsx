import {observer} from "mobx-react-lite";
import React, {useEffect, useState} from "react";
import StaffLayout from "../../../../layout/StaffLayout";
import SEO from "../../../../components/SEO";
import ticketStore from "../../../../stores/TicketStore";
import {GetServerSideProps} from "next";
import BaseButton from "../../../../components/common/BaseButton";
import Link from "next/link";
import {HiArrowLeft} from "react-icons/hi";
import EditCategory from "../../../../components/staff/tickets/category/EditCategory";

const TicketCategoryPage: NextPageWithLayout = observer(({categoryId}: {categoryId: string}) => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        ticketStore.getTicketCategoryById(categoryId).then(() => {
            setLoading(false)
        })
    }, [categoryId])

    if (loading) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-4">
            <SEO seo={{
                title: `Ticket Categories`
            }} />
            <div className="flex justify-between items-end pb-3 border-b-2 border-dark-light">
                <Link href="/staff/tickets/categories" passHref={true}>
                    <a>
                        <BaseButton type="dark">
                            <div className="flex gap-1 items-center">
                                <HiArrowLeft/> Back
                            </div>
                        </BaseButton>
                    </a>
                </Link>
                <h1 className="text-3xl font-bold text-gray-300">
                    Editing {ticketStore.categories[categoryId].name}
                </h1>
                <BaseButton type="danger">
                    <div className="flex gap-1 items-center">
                        Delete Category
                    </div>
                </BaseButton>
            </div>
            <EditCategory category={ticketStore.categories[categoryId]} deleteCategory={() => console.info("TODO")} />
        </div>
    )
})

export const getServerSideProps: GetServerSideProps = async (context) => {
    const id = context.params['id']

    return {
        props: {
            categoryId: id || null,
        },
    }
}

TicketCategoryPage.getLayout = function getLayout(page) {
    return (
        <StaffLayout permission="staff">
            {page}
        </StaffLayout>
    )
}

export default TicketCategoryPage
