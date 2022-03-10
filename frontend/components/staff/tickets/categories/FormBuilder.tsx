import React, {FC, useState} from "react";
import {arrayMoveImmutable} from 'array-move';
import SortableFormBlocks from "./formBuilder/SortableFormBlocks";
import {BaseButton} from "../../../common/BaseButton";
import BasicCard from "../../../common/cards/BasicCard";
import BaseInputWithLabel from "../../../common/forms/BaseInputWithLabel";
import CheckBoxWithLabel from "../../../common/forms/CheckBoxWithLabel";

interface FormBuilderProps {
    category: TicketCategory
    setCategory: (category: TicketCategory) => void
}

const FormBuilder: FC<FormBuilderProps> = ({category, setCategory}) => {
    const [input, setInput] = useState<TicketInput>(null)

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
            required: false,
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

    const updateBlock = (input: TicketInput) => {
        const index = category.inputs.findIndex(((ticketInput) => ticketInput.id === input.id));
        const inputs = [
            ...category.inputs
        ]
        inputs[index] = input
        setCategory({
            ...category,
            inputs
        })
    }

    return (
        <div>
            <div className="flex justify-between items-center pb-2 mb-4 border-b-2 border-shark-400">
                <h1 className="text-3xl font-bold">
                    Form Builder
                </h1>
                <BaseButton type="primary" onClick={() => addNewBlock()}>
                    Add new form block
                </BaseButton>
            </div>
            <div className="grid grid-cols-6 gap-4">
                <div className="col-span-4">
                    <BasicCard>
                        {input && (
                          <form key={input.id}>
                              <div className="flex flex-col gap-4 mb-4">
                                  <BaseInputWithLabel
                                      defaultValue={input.label}
                                      label="Label"
                                      onChange={(event) => updateBlock({
                                          ...input,
                                          label: event.target.value
                                      })}
                                  />
                                  <div>
                                      <BaseInputWithLabel
                                          defaultValue={input.hint}
                                          label="Hint"
                                          onChange={(event) => updateBlock({
                                              ...input,
                                              hint: event.target.value
                                          })}
                                      />
                                      <p className="pt-1 pl-1 text-sm text-gray-400">
                                          A small text display, giving the user more context to what we want of them.
                                      </p>
                                  </div>
                                  <div>
                                      <BaseInputWithLabel
                                          label="Type"
                                          defaultValue={input.type}
                                          onChange={(event) => updateBlock({
                                              ...input,
                                              type: (event.target.value === "TextBox") ? "TextBox" : "Text"
                                          })}
                                      />
                                      <p className="pt-2 pl-1 text-sm text-gray-400">
                                          Please enter only one of the following: <span className="px-1 bg-shark-700 rounded">Text, TextBox</span>
                                      </p>
                                  </div>
                              </div>
                              <CheckBoxWithLabel
                                  defaultChecked={input.required}
                                  onChange={(event) => updateBlock({
                                      ...input,
                                      required: event.target.checked
                                  })}
                                  label="Required"
                              />
                          </form>
                        )}
                    </BasicCard>
                </div>
                <div className="col-span-2">
                    <SortableFormBlocks
                        items={category.inputs}
                        onSortEnd={onSortEnd}
                        deleteBlock={removeBlock}
                        selectBlock={setInput}
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
        </div>
    )
}

export default FormBuilder
