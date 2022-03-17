import Modal from "../../../common/Modal";
import BaseInputWithLabel from "../../../common/forms/BaseInputWithLabel";
import InputWithPrefilledValue from "../../../common/forms/InputWithPrefilledValue";
import {BASE_URL} from "../../../../core/constants";
import BasicCard from "../../../common/cards/BasicCard";
import BaseButton from "../../../common/BaseButton";
import {FormEvent, useState} from "react";
import ticketStore from "../../../../stores/TicketStore";
import {toast} from "react-toastify";

const CreateTicketCategoryModal = ({isOpen, toggleModal}: {isOpen: boolean, toggleModal: () => void}) => {
    const [id, setID] = useState(undefined)
    const [name, setName] = useState(undefined)

    const submit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        toggleModal()
        toast.promise(
            ticketStore.updateTicketCategory({
                id: id,
                name: name,
                description: undefined,
                inputs: [],
                active: false
            }),
            {
                pending: `Creating category...`,
                success: `The category was successfully created.`,
                error: `The category could not be created.`,
            }
        ).catch(error => console.error(error))
    }

    return (
        <Modal isOpen={isOpen} toggleModal={toggleModal} maxWidth="max-w-2xl">
            <BasicCard padding="p-6">
                <form className="flex flex-col gap-5" onSubmit={submit}>
                    <h1 className="text-3xl font-bold text-gray-300">
                        Create new category
                    </h1>
                    <BaseInputWithLabel
                        label="Name"
                        required={true}
                        onChange={(event) => setName(event.target.value)}
                    />
                    <InputWithPrefilledValue
                        label="Url"
                        prefilledValue={`${BASE_URL}/tickets/create/`}
                        required={true}
                        onChange={(event) => setID(event.target.value)}
                    />
                    <BaseButton type="success" htmlType="submit">
                        Submit
                    </BaseButton>
                </form>
            </BasicCard>
        </Modal>
    )
}

export default CreateTicketCategoryModal
