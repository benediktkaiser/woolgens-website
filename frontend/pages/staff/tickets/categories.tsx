import {observer} from "mobx-react-lite";
import React, {useEffect, useState} from "react";
import StaffLayout from "../../../layout/StaffLayout";
import BasicCard from "../../../components/common/cards/BasicCard";
import {BaseButton} from "../../../components/common/BaseButton";
import TicketCategoryButton from "../../../components/staff/tickets/categories/TicketCategoryButton";
import {HiOutlineFolderAdd} from "react-icons/hi"
import EditCategory from "../../../components/staff/tickets/categories/EditCategory";
import ticketCategoryStore from "../../../stores/tickets/TicketCategoryStore";
import {toast} from "react-toastify";
import BaseInputWithLabel from "../../../components/common/forms/BaseInputWithLabel";
import InputWithPrefilledValue from "../../../components/common/forms/InputWithPrefilledValue";
import {BASE_URL} from "../../../core/constants";

const StaffPage: NextPageWithLayout = observer(() => {
    const [selectedCategoryId, setSelectedCategoryId] = useState<string>(null)
    const [newCategory, setNewCategory] = useState<TicketCategory>({
        id: undefined,
        name: undefined,
        description: '',
        inputs: [],
        active: false
    })

    useEffect(() => {
        ticketCategoryStore.fetchTicketCategories()
    }, [])

    const createNewCategory = () => {
        if (newCategory.name && newCategory.id) {
            ticketCategoryStore.updateTicketCategory(newCategory)
            toast.success(`Category "${newCategory.name}" was successfully created!`)
            return;
        }
        toast.error('Please fill in all fields to create a new category.')
    }

    const deleteCategoryById = (categoryId: string) => {
        toast.promise(
            ticketCategoryStore.deleteTicketCategoryById(categoryId),
            {
                pending: `Category #${categoryId} is being deleted. Please wait a moment.`,
                success: `Category #${categoryId} was successfully deleted.`,
                error: `Category #${categoryId} could not be deleted.`
            }
        ).then(() => setSelectedCategoryId(null))
    }

    return (
        <div className="grid grid-cols-5 gap-3">
            <div className="col-span-1">
                <BasicCard>
                    <BaseButton type="primary" className="w-full" onClick={() => setSelectedCategoryId(null)}>
                        <div className="flex gap-2 justify-center items-center">
                            <HiOutlineFolderAdd size="1.4rem"/>
                            <span>
                                Create Category
                            </span>
                        </div>
                    </BaseButton>
                    <div className="flex flex-col gap-3 mt-5">
                        {Object.values(ticketCategoryStore.categories).map((category, index) =>
                            <TicketCategoryButton key={index} select={setSelectedCategoryId} category={category}/>
                        )}
                    </div>
                </BasicCard>
            </div>
            <div className="col-span-4">
                {selectedCategoryId && ticketCategoryStore.categories[selectedCategoryId] ? (
                    <EditCategory category={ticketCategoryStore.categories[selectedCategoryId]}
                                  deleteCategory={deleteCategoryById}/>
                ) : (
                    <div className="flex flex-col space-y-4">
                        <BasicCard padding="py-10">
                            <div className="text-center">
                                <h1 className="text-3xl font-bold">
                                    Please select a category to edit.
                                </h1>
                                <h4 className="text-lg text-gray-400">
                                    You can find all the different categories to your left. Or you can create a new one.
                                </h4>
                            </div>
                            <div className="mx-auto mt-5 max-w-lg">
                                <div className="flex flex-col space-y-4">
                                    <BaseInputWithLabel
                                        label="Name"
                                        onChange={event => setNewCategory({...newCategory, name: event.target.value})}
                                    />
                                    <div>
                                        <InputWithPrefilledValue
                                            label="URL"
                                            pattern="[0-9\.]+"
                                            prefilledValue={`${BASE_URL}/tickets/create/`}
                                            onChange={event => setNewCategory({...newCategory, id: event.target.value})}
                                        />
                                        <p className="text-sm text-gray-500">
                                            You cannot change the category URL after creation. Please choose carefully!
                                        </p>
                                    </div>
                                    <div>
                                        <BaseButton type="primary" onClick={createNewCategory}>
                                            <div className="flex gap-2 justify-center items-center">
                                                <HiOutlineFolderAdd size="1.4rem"/>
                                                <span>
                                            Create Category
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
