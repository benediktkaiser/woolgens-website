import Link from "next/link";
import BaseButton from "../../../common/BaseButton";
import React from "react";
import {toast} from "react-toastify";
import ticketStore from "../../../../stores/TicketStore";
import {confirmAlert} from "react-confirm-alert";
import ConfirmModal from "../../../common/ConfirmModal";

const StatusRow = ({status}: {status: TicketStatus}) => {

    const deleteStatus = () => {
        toast.promise(
            ticketStore.deleteTicketStatusById(status.id),
            {
                pending: `Deleting status...`,
                success: `Deleted status ${status.id}.`,
                error: `The category could not be created.`,
            }
        ).catch(error => console.error(error))
    }

    const openDeleteModal = () => {
        confirmAlert({
            customUI: ({onClose}) => {
                return <ConfirmModal
                    text={`Are you sure you want to delete status #${status.id}? This action is irreversible and cannot be undone.`}
                    close={onClose}
                    confirm={deleteStatus}
                />
            }
        });
    }

    return (
        <div className="p-4 bg-dark-light border-b-2 last:border-b-0 border-shark-400">
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold rounded-lg">
                    {status.label}
                </h1>
                <div className="flex gap-2">
                    <Link href={`/staff/tickets/statuses/${status.id}`} passHref={true}>
                        <a>
                            <BaseButton type="dark-light">
                                Edit
                            </BaseButton>
                        </a>
                    </Link>
                    <BaseButton type="danger" onClick={openDeleteModal}>
                        Delete
                    </BaseButton>
                </div>
            </div>
        </div>
    )
}

export default StatusRow
