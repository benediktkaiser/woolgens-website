import {observer} from "mobx-react-lite";
import React, {useEffect, useState} from "react";
import StaffLayout from "../../../../layout/StaffLayout";
import SEO from "../../../../components/SEO";
import ticketStore from "../../../../stores/TicketStore";
import {GetServerSideProps} from "next";
import BaseButton from "../../../../components/common/BaseButton";
import Link from "next/link";
import {HiArrowLeft} from "react-icons/hi";
import EditStatus from "../../../../components/staff/tickets/status/EditStatus";
import BasicCard from "../../../../components/common/cards/BasicCard";
import {toast} from "react-toastify";

const TicketStatusPage: NextPageWithLayout = observer(({statusId}: {statusId: string}) => {
    const [loading, setLoading] = useState(true)
    const [temporaryStatus, setTemporaryStatus] = useState<TicketStatus>(null)

    useEffect(() => {
        ticketStore.getTicketStatusById(statusId).then((result) => {
            setTemporaryStatus(result)
            setLoading(false)
        })
    }, [statusId])

    if (loading) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    const updateStatus = (status: TicketStatus) => {
        ticketStore.updateTicketStatus(status).then(() => {
            toast.success(`Status "${status.label}" was updated.`)
        });
    }

    return (
        <div className="flex flex-col gap-4">
            <SEO seo={{
                title: `Ticket Categories`
            }} />
            <div className="flex justify-between items-end pb-3 border-b-2 border-dark-light">
                <Link href="/staff/tickets/statuses" passHref={true}>
                    <a>
                        <BaseButton type="dark">
                            <div className="flex gap-1 items-center">
                                <HiArrowLeft/> Back
                            </div>
                        </BaseButton>
                    </a>
                </Link>
                <h1 className="text-3xl font-bold text-gray-300">
                    Editing {ticketStore.statuses[statusId].label}
                </h1>
                <BaseButton type="danger">
                    <div className="flex gap-1 items-center">
                        Delete Status
                    </div>
                </BaseButton>
            </div>
            <BasicCard>
                <EditStatus status={temporaryStatus} setStatus={setTemporaryStatus} />
                <div className="flex justify-between items-center mt-6">
                    <div>
                        <BaseButton type="success" onClick={() => updateStatus(temporaryStatus)}>
                            Save and publish changes
                        </BaseButton>
                    </div>
                </div>
            </BasicCard>
        </div>
    )
})

export const getServerSideProps: GetServerSideProps = async (context) => {
    const id = context.params['id']

    return {
        props: {
            statusId: id || null,
        },
    }
}

TicketStatusPage.getLayout = function getLayout(page) {
    return (
        <StaffLayout permission="staff">
            {page}
        </StaffLayout>
    )
}

export default TicketStatusPage
