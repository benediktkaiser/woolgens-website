import BasicCard from "../../../common/cards/BasicCard";
import React, {FC, useEffect, useState} from "react";
import {BaseButton} from "../../../common/BaseButton";
import BaseInputWithLabel from "../../../common/forms/BaseInputWithLabel";
import InputWithPrefilledValue from "../../../common/forms/InputWithPrefilledValue";
import {BASE_URL} from "../../../../core/constants";
import dynamic from "next/dynamic";
const Editor = dynamic(() => import('../../../quill/Editor'), {
    ssr: false
})
interface GeneralCategorySettingsProps {
    category: TicketCategory
}

const GeneralCategorySettings: FC<GeneralCategorySettingsProps> = ({category}) => {
    const [description, setDescription] = useState('');

    useEffect(() => {
        setDescription(category.description);
    }, [category.description])

    return (
        <BasicCard withTabs={true}>
            {category.active ? (
                <div className="flex justify-between items-center p-4 mb-3 bg-shark-500 rounded-lg border-l-4 border-green-500">
                    <div>
                        <h1 className="text-lg text-gray-100">
                            This category is currently Unlocked.
                        </h1>
                        <p className="text-sm text-gray-400">
                            Users can submit new tickets in this category. You can close the category to forbid users to create new entries.
                        </p>
                    </div>
                    <BaseButton type="danger">
                        Lock Category
                    </BaseButton>
                </div>
            ) : (
                <div className="flex justify-between items-center p-4 mb-3 bg-shark-500 rounded-lg border-l-4 border-red-500">
                    <div>
                        <h1 className="text-lg text-gray-100">
                            This category is currently locked.
                        </h1>
                        <p className="text-sm text-gray-400">
                            Users cannot submit new tickets in this category. You can unlock the category to allow users to create new entries.
                        </p>
                    </div>
                    <BaseButton type="success">
                        Unlock Category
                    </BaseButton>
                </div>
            )}

            <section>
                <form className="flex flex-col space-y-2">
                    <div key={category.name}>
                        <BaseInputWithLabel
                            label="Name"
                            defaultValue={category.name}
                        />
                    </div>
                    <div key={category.id}>
                        <InputWithPrefilledValue
                            label="URL"
                            prefilledValue={`${BASE_URL}/tickets/create/`}
                            defaultValue={category.id}
                        />
                    </div>
                    <div className="py-3">
                        <p className="pl-1 my-1 mr-5 text-lg text-gray-200">
                            Description:
                        </p>
                        <Editor content={description} setContent={setDescription} />
                    </div>
                </form>
                <BaseButton type="success" className="mt-2">
                    Save and publish changes
                </BaseButton>
            </section>
        </BasicCard>
    )
}

export default GeneralCategorySettings
