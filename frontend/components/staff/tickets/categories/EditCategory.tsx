import React, {FC, useEffect, useState} from "react";
import GeneralCategorySettings from "./GeneralCategorySettings";
import FormBuilder from "./FormBuilder";
import Tab from "../../../common/Tab";
import CategoryPerms from "./CategoryPerms";
import BasicCard from "../../../common/cards/BasicCard";
import {BaseButton} from "../../../common/BaseButton";
import ticketCategoryStore from "../../../../stores/tickets/TicketCategoryStore";
import {confirmAlert} from "react-confirm-alert";
import ConfirmModal from "../../../common/ConfirmModal";
import {toast} from "react-toastify";

interface EditCategoryProps {
    category: TicketCategory
    deleteCategory: (categoryId) => void
}

const EditCategory: FC<EditCategoryProps> = ({category, deleteCategory}) => {
    const [page, setPage] = useState('settings')
    const [temporaryCategory, setTemporaryCategory] = useState<TicketCategory>(null)

    useEffect(() => {
        setTemporaryCategory(category)
    }, [category])

    if (temporaryCategory === null) {
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
                            Are you sure you want to delete ticket category <span className="font-bold text-red-500">{category.name}</span>?
                            This action is irreversible and cannot be undone.
                        </span>
                    )}
                    close={onClose}
                    confirm={() => deleteCategory(category.id)}
                />
            }
        });
    }

    const updateCategory = (category: TicketCategory) => {
        ticketCategoryStore.updateTicketCategory(category);
        toast.success(`Category "${category.name}" was updated.`)
    }

    return (
        <div className="flex flex-col gap-2">
            <div>
                <ul className="flex flex-wrap">
                    <Tab title="Settings" active={page === "settings"} onClick={() => setPage('settings')}/>
                    <Tab title="Form Builder" active={page === "builder"} onClick={() => setPage('builder')}/>
                    <Tab title="Permissions" active={page === "perms"} onClick={() => setPage('perms')}/>
                </ul>

                <div className="flex flex-col space-y-4">
                    <BasicCard>
                        {page === "settings" &&
                            <GeneralCategorySettings defaultCategory={category} category={temporaryCategory}
                                                     setCategory={setTemporaryCategory} />}
                        {page === "builder" && <FormBuilder category={temporaryCategory} setCategory={setTemporaryCategory} />}
                        {page === "perms" && <CategoryPerms category={temporaryCategory} />}
                        <div className="flex justify-between items-center mt-6">
                            <div>
                                <BaseButton type="success"
                                            onClick={() => updateCategory(temporaryCategory)}>
                                    Save and publish changes
                                </BaseButton>
                                <BaseButton type="primary" className="ml-2"
                                            onClick={() => setTemporaryCategory(category)}>
                                    Reset all changes
                                </BaseButton>
                            </div>
                            <BaseButton type="danger" onClick={openDeleteModal}>
                                Delete Category
                            </BaseButton>
                        </div>
                    </BasicCard>
                </div>
            </div>
        </div>
    )
}

export default EditCategory
