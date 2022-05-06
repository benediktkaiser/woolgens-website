import React, {FC} from "react";
import BaseButton from "../../../common/BaseButton";
import BaseInputWithLabel from "../../../common/forms/BaseInputWithLabel";
import dynamic from "next/dynamic";
import ticketStore from "../../../../stores/TicketStore";

const BaseEditor = dynamic(() => import('../../../editors/BaseEditor'), {
    ssr: false
})
interface GeneralCategorySettingsProps {
    category: TicketCategory
    setCategory: (category: TicketCategory) => void
}

const GeneralCategorySettings: FC<GeneralCategorySettingsProps> = ({category, setCategory}) => {
    return (
        <>
            {category.active ? (
                <div className="flex justify-between items-center p-4 bg-shark-500 rounded-lg border-l-4 border-green-500">
                    <div>
                        <h1 className="text-lg text-gray-100">
                            This category is currently Unlocked.
                        </h1>
                        <p className="text-sm text-gray-400">
                            Users can submit new tickets in this category. You can close the category to forbid users to create new entries.
                        </p>
                    </div>
                    <BaseButton type="danger" onClick={() => ticketStore.updateTicketCategory({ ...category, active: false })}>
                        Lock Category
                    </BaseButton>
                </div>
            ) : (
                <div className="flex justify-between items-center p-4 bg-shark-500 rounded-lg border-l-4 border-red-500">
                    <div>
                        <h1 className="text-lg text-gray-100">
                            This category is currently locked.
                        </h1>
                        <p className="text-sm text-gray-400">
                            Users cannot submit new tickets in this category. You can unlock the category to allow users to create new entries.
                        </p>
                    </div>
                    <BaseButton type="success" onClick={() => ticketStore.updateTicketCategory({ ...category, active: true })}>
                        Unlock Category
                    </BaseButton>
                </div>
            )}

            <section className="mt-3">
                <form className="flex flex-col space-y-2">
                    <div>
                        <BaseInputWithLabel
                            label="Name"
                            defaultValue={category.name}
                            onChange={(event => setCategory({...category, name: event.target.value}))}
                        />
                    </div>
                    <div className="pt-3">
                        <p className="pl-1 my-1 mr-5 text-lg text-gray-200">
                            Description:
                        </p>
                        <BaseEditor content={category.description} setContent={(value) => setCategory({ ...category, description: value })} />
                    </div>
                </form>
            </section>
        </>
    )
}

export default GeneralCategorySettings
