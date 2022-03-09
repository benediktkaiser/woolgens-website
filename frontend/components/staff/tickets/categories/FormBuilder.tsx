import {FC} from "react";
import {arrayMoveImmutable} from 'array-move';
import SortableFormBlocks from "./formBuilder/SortableFormBlocks";
import {BaseButton} from "../../../common/BaseButton";

interface FormBuilderProps {
    category: TicketCategory
    setCategory: (category: TicketCategory) => void
}

const FormBuilder: FC<FormBuilderProps> = ({category, setCategory}) => {

    const onSortEnd = ({oldIndex, newIndex}) => {
        setCategory({
            ...category,
            inputs: arrayMoveImmutable(category.inputs, oldIndex, newIndex)
        })
    };

    const removeBlock = (blockId: string) => {
        const filteredInputs = category.inputs.filter((input) => {
            return input.id !== blockId
        })

        setCategory({
            ...category,
            inputs: filteredInputs
        })
    }

    const addNewBlock = () => {
        const newBlock: TicketInput = {
            id: `Block #${category.inputs.length + 1}`,
            label: `Block #${category.inputs.length + 1}`,
            hint: '',
            type: "Text",
            meta: {},
        }
        setCategory({
            ...category,
            inputs: [
                ...category.inputs,
                newBlock
            ],
        })
    };

    return (
        <div>
            <div className="flex justify-between items-center pb-2 mb-4 border-b-2 border-shark-400">
                <h1 className="text-3xl font-bold">
                    Form Builder
                </h1>
                <BaseButton type="success" onClick={() => addNewBlock()}>
                    Add new form block
                </BaseButton>
            </div>
            <div>
                <SortableFormBlocks
                    items={category.inputs}
                    onSortEnd={onSortEnd}
                    deleteBlock={removeBlock}
                />
                {category.inputs.length === 0 && (
                    <div className="py-7 text-center bg-dark-light rounded-lg">
                        <p className="mb-2 text-lg text-gray-300">
                            This category does not have any inputs yet. Create the first one now
                        </p>
                        <BaseButton type="dark" onClick={() => addNewBlock()}>
                            Add the first form block
                        </BaseButton>
                    </div>
                )}
            </div>
        </div>
    )
}

export default FormBuilder
