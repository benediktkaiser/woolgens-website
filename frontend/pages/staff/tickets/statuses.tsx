import {observer} from "mobx-react-lite";
import React, {useEffect, useState} from "react";
import StaffLayout from "../../../layout/StaffLayout";
import BasicCard from "../../../components/common/cards/BasicCard";
import {BaseButton} from "../../../components/common/BaseButton";
import {HiOutlineStatusOnline} from "react-icons/hi"
import ticketCategoryStore from "../../../stores/tickets/TicketCategoryStore";
import {toast} from "react-toastify";
import BaseInputWithLabel from "../../../components/common/forms/BaseInputWithLabel";
import TicketStatusButton from "../../../components/staff/tickets/statuses/TicketStatusButton";
import EditStatus from "../../../components/staff/tickets/statuses/EditStatus";

const StaffPage: NextPageWithLayout = observer(() => {
    const [selectedStatusId, setSelectedStatusId] = useState<string>(null)
    const [newStatus, setNewStatus] = useState<TicketStatus>({
        id: undefined,
        label: undefined,
        color: "blue",
        willClose: false
    })

    useEffect(() => {
        ticketCategoryStore.fetchTicketStatuses()
    }, [])

    const createNewStatus = () => {
        if (newStatus.id && newStatus.label) {
            ticketCategoryStore.updateTicketStatus(newStatus)
            toast.success(`Status "${newStatus.label}" was successfully created!`)
            return;
        }
        toast.error('Please fill in all fields to create a new status.')
    }

    const deleteStatusById = (statusId: string) => {
        ticketCategoryStore.deleteTicketStatusById(statusId).then(() => {
            setSelectedStatusId(null)
            toast.success(`Status #${statusId} was successfully deleted.`)
        })
    }

    return (
        <div className="grid grid-cols-5 gap-3">
            <div className="col-span-1">
                <BasicCard>
                    <BaseButton type="primary" className="w-full" onClick={() => setSelectedStatusId(null)}>
                        <div className="flex gap-2 justify-center items-center">
                            <HiOutlineStatusOnline size="1.4rem"/>
                            <span>
                                Create Status
                            </span>
                        </div>
                    </BaseButton>
                    <div className="flex flex-col gap-3 mt-5">
                        {Object.values(ticketCategoryStore.statuses).map((status, index) =>
                            <TicketStatusButton key={index} status={status} select={setSelectedStatusId} />
                        )}
                    </div>
                </BasicCard>
            </div>
            <div className="col-span-4">
                {selectedStatusId && ticketCategoryStore.statuses[selectedStatusId] ? (
                    <EditStatus status={ticketCategoryStore.statuses[selectedStatusId]} deleteStatus={deleteStatusById} />
                ) : (
                    <div className="flex flex-col space-y-4">
                        <BasicCard padding="py-10">
                            <div className="text-center">
                                <h1 className="text-3xl font-bold">
                                    Please select a status to edit.
                                </h1>
                                <h4 className="text-lg text-gray-400">
                                    You can find all the different statues to your left. Or you can create a new one.
                                </h4>
                            </div>
                            <div className="mx-auto mt-5 max-w-lg">
                                <div className="flex flex-col space-y-4">
                                    <BaseInputWithLabel
                                        label="Id"
                                        onChange={event => setNewStatus({...newStatus, id: event.target.value})}
                                    />
                                    <BaseInputWithLabel
                                        label="Label"
                                        onChange={event => setNewStatus({...newStatus, label: event.target.value})}
                                    />
                                    <div>
                                        <BaseButton type="primary" onClick={createNewStatus}>
                                            <div className="flex gap-2 justify-center items-center">
                                                <HiOutlineStatusOnline size="1.4rem"/>
                                                <span>
                                                    Create Status
                                                </span>
                                            </div>
                                        </BaseButton>
                                    </div>
                                </div>
                            </div>
                        </BasicCard>
                    </div>
                )}
            </div>
        </div>
    )
})

StaffPage.getLayout = function getLayout(page) {
    return (
        <StaffLayout permission="web.staff.view">
            {page}
        </StaffLayout>
    )
}

export default StaffPage
