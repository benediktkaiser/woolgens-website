import Modal from "../../../common/Modal";
import BaseInputWithLabel from "../../../common/forms/BaseInputWithLabel";
import BasicCard from "../../../common/cards/BasicCard";
import BaseButton from "../../../common/BaseButton";
import {FormEvent, useState} from "react";
import ticketStore from "../../../../stores/TicketStore";
import {toast} from "react-toastify";

const CreateTicketStatusModal = ({isOpen, toggleModal}: {isOpen: boolean, toggleModal: () => void}) => {
    const [color, setColor] = useState(undefined)
    const [name, setName] = useState(undefined)

    const submit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        toggleModal()
        toast.promise(
            ticketStore.updateTicketStatus({
                id: name.toLowerCase(),
                label: name,
                color: color,
                willClose: false,
            }),
            {
                pending: `Creating status...`,
                success: `The status was successfully created.`,
                error: `The status could not be created.`,
            }
        ).catch(error => console.error(error))
    }

    return (
        <Modal isOpen={isOpen} toggleModal={toggleModal} maxWidth="max-w-2xl">
            <BasicCard padding="p-6">
                <form className="flex flex-col gap-5" onSubmit={submit}>
                    <h1 className="text-3xl font-bold text-gray-300">
                        Create new status
                    </h1>
                    <BaseInputWithLabel
                        label="Name"
                        required={true}
                        onChange={(event) => setName(event.target.value)}
                    />
                    <BaseInputWithLabel
                        defaultValue="#6845e8"
                        label="Color"
                        required={true}
                        onChange={(event) => setColor(event.target.value)}
                    />
                    <BaseButton type="success" htmlType="submit">
                        Submit
                    </BaseButton>
                </form>
            </BasicCard>
        </Modal>
    )
}

export default CreateTicketStatusModal
