import React, {FC, useEffect, useState} from "react";
import Tab from "../../../common/Tab";
import BasicCard from "../../../common/cards/BasicCard";
import BaseButton from "../../../common/BaseButton";
import ticketStore from "../../../../stores/TicketStore";
import {toast} from "react-toastify";
import GeneralCategorySettings from "./CategoryGeneralSettings";
import CategoryFormBuilder from "./CategoryFormBuilder";
import CategoryPerms from "./CategoryPermissions";

interface EditCategoryProps {
    category: TicketCategory
    deleteCategory: (categoryId) => void
}

const EditCategory: FC<EditCategoryProps> = ({category}) => {
    const [page, setPage] = useState('settings')
    const [temporaryCategory, setTemporaryCategory] = useState<TicketCategory>(null)

    useEffect(() => {
        setTemporaryCategory(category)
    }, [category])

    if (!temporaryCategory) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    const updateCategory = (category: TicketCategory) => {
        ticketStore.updateTicketCategory(category).then(() => {
            toast.success(`Category "${category.name}" was updated.`)
        });
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
                    <BasicCard withTabs={true}>
                        {page === "settings" &&
                            <GeneralCategorySettings category={temporaryCategory} setCategory={setTemporaryCategory} />}
                        {page === "builder" && <CategoryFormBuilder category={temporaryCategory} setCategory={setTemporaryCategory} />}
                        {page === "perms" && <CategoryPerms category={category} />}
                        <div className="flex justify-between items-center mt-6">
                            <div>
                                <BaseButton type="success"
                                            onClick={() => updateCategory(temporaryCategory)}>
                                    Save and publish changes
                                </BaseButton>
                            </div>
                        </div>
                    </BasicCard>
                </div>
            </div>
        </div>
    )
}

export default EditCategory
