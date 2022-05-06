import BaseButton from "../../../common/BaseButton";
import ticketStore from "../../../../stores/TicketStore";
import {toast} from "react-toastify";
import {confirmAlert} from "react-confirm-alert";
import ConfirmModal from "../../../common/ConfirmModal";
import React from "react";
import Link from "next/link"

const CategoryRow = ({ category }: { category: TicketCategory }) => {

    const deleteCategory = () => {
        toast.promise(
            ticketStore.deleteTicketCategoryById(category.id),
            {
                pending: `Deleting category...`,
                success: `Deleted category ${category.id}.`,
                error: `The category could not be created.`,
            }
        ).catch(error => console.error(error))
    }

    const openDeleteModal = () => {
        confirmAlert({
            customUI: ({onClose}) => {
                return <ConfirmModal
                    text={`Are you sure you want to delete Category #${category.id}? This action is irreversible and cannot be undone.`}
                    close={onClose}
                    confirm={deleteCategory}
                />
            }
        });
    }

    return (
        <div className="p-4 bg-dark-light border-b-2 last:border-b-0 border-shark-400">
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold">
                    {category.name}
                </h1>
                <div className="flex gap-2">
                    <Link href={`/staff/tickets/categories/${category.id}`} passHref={true}>
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

export default CategoryRow
