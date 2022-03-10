import React, {FC, useEffect, useState} from "react";
import {confirmAlert} from "react-confirm-alert";
import ConfirmModal from "../../../common/ConfirmModal";
import ticketCategoryStore from "../../../../stores/tickets/TicketCategoryStore";
import {toast} from "react-toastify";
import {BaseButton} from "../../../common/BaseButton";
import BasicCard from "../../../common/cards/BasicCard";
import BaseInputWithLabel from "../../../common/forms/BaseInputWithLabel";
import CheckBoxWithLabel from "../../../common/forms/CheckBoxWithLabel";

interface EditStatusProps {
    status: TicketStatus
    deleteStatus: (statusId: string) => void
}
const EditStatus: FC<EditStatusProps> = ({status, deleteStatus}) => {
    const [temporaryStatus, setTemporaryStatus] = useState<TicketStatus>(null)

    useEffect(() => {
        setTemporaryStatus(status)
    }, [status])

    if (temporaryStatus === null) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    const openDeleteModal = () => {
        confirmAlert({
            customUI: ({onClose}) => {
                return <ConfirmModal
                    text={(
                        <span>
                            Are you sure you want to delete ticket status <span className="font-bold text-red-500">{status.label}</span>?
                            This action is irreversible and cannot be undone.
                        </span>
                    )}
                    close={onClose}
                    confirm={() => deleteStatus(status.id)}
                />
            }
        });
    }

    const updateStatus = (status: TicketStatus) => {
        ticketCategoryStore.updateTicketStatus(status);
        toast.success(`Status "${status.label}" was updated.`)
    }
    return (
        <div className="flex flex-col gap-2">
            <BasicCard>
                <form className="flex flex-col gap-2" key={temporaryStatus.id}>
                    <BaseInputWithLabel
                        defaultValue={status.label}
                        onChange={event => setTemporaryStatus({...temporaryStatus, label: event.target.value})}
                        label="Label"
                    />
                    <BaseInputWithLabel
                        defaultValue={status.color}
                        onChange={event => setTemporaryStatus({...temporaryStatus, color: event.target.value})}
                        label="Color"
                    />
                    <div className="flex gap-3 justify-between items-center mt-4">
                        <div>
                            <CheckBoxWithLabel
                                defaultChecked={status.willClose}
                                label="Close on assignment"
                                onChange={event => setTemporaryStatus({...temporaryStatus, willClose: event.target.checked})}
                            />
                            <p className="text-sm text-gray-500">
                                Applying this setting will automatically close a ticket on application of this status.
                            </p>
                        </div>
                        <div className="inline-flex py-1 px-3 text-white rounded-xl" style={{backgroundColor: temporaryStatus.color}}>
                            {temporaryStatus.label}
                        </div>
                    </div>
                </form>
                <div className="flex gap-3 items-center mt-6">
                    <BaseButton type="success"
                                onClick={() => updateStatus(temporaryStatus)}>
                        Save and publish changes
                    </BaseButton>
                    <BaseButton type="danger" onClick={openDeleteModal}>
                        Delete Status
                    </BaseButton>
                </div>
            </BasicCard>
        </div>
    )
}

export default EditStatus
