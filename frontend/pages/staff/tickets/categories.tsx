import {observer} from "mobx-react-lite";
import React, {useState} from "react";
import StaffLayout from "../../../layout/StaffLayout";
import BasicCard from "../../../components/common/cards/BasicCard";
import {BaseButton} from "../../../components/common/BaseButton";
import TicketCategoryButton from "../../../components/staff/tickets/categories/TicketCategoryButton";
import {HiOutlineFolderAdd} from "react-icons/hi"
import EditCategory from "../../../components/staff/tickets/categories/EditCategory";
import ticketStore from "../../../stores/TicketStore";

const StaffPage: NextPageWithLayout = observer(() => {
    const [category, setCategory] = useState<TicketCategory>(null)

    return (
        <div className="grid grid-cols-5 gap-3">
            <div className="col-span-1">
                <BasicCard>
                    <BaseButton type="primary" className="w-full">
                        <div className="flex gap-2 justify-center items-center">
                            <HiOutlineFolderAdd size="1.4rem" />
                            <span>
                                Create Category
                            </span>
                        </div>
                    </BaseButton>
                    <div className="flex flex-col gap-3 mt-5">
                        {ticketStore.ticketCategories.map((category, index) =>
                            <TicketCategoryButton key={index} select={setCategory} category={category} />
                        )}
                    </div>
                </BasicCard>
            </div>
            <div className="col-span-4">
                {category ? (
                    <EditCategory category={category} />
                ): (
                    <BasicCard padding="py-20">
                        <div className="text-center">
                            <h1 className="text-3xl font-bold">
                                Please select a category to edit.
                            </h1>
                            <h4 className="mb-5 text-lg text-gray-400">
                                You can find all the different categories to your left. Or you can create a new one.
                            </h4>
                            <BaseButton type="primary">
                                <div className="flex gap-2 justify-center items-center">
                                    <HiOutlineFolderAdd size="1.4rem" />
                                    <span>
                                Create Category
                            </span>
                                </div>
                            </BaseButton>
                        </div>
                    </BasicCard>
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
