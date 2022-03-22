import {useRouter} from "next/router";
import React, {FormEvent, useEffect} from "react";
import authStore from "../../stores/AuthStore";
import ticketStore from "../../stores/TicketStore";
import {toast} from "react-toastify";
import Collapse from "../common/Collapse";
import Renderer from "../editors/Renderer";
import BaseInput from "../common/forms/BaseInput";
import BasicCard from "../common/cards/BasicCard";
import TicketCreateInput from "./TicketCreateInput";
import BaseButton from "../common/BaseButton";
import {observer} from "mobx-react-lite";
import {HiOutlinePencilAlt} from "react-icons/hi"

const CreateTicket = observer(({category}: {category: TicketCategory}) => {
    const router = useRouter()

    useEffect(() => {
        if (!ticketStore.temporaryTickets[category.id]) {
            ticketStore.setTemporaryTicket(category.id, {
                title: '',
                issuer: { name: authStore.user.name, uuid: authStore.user.uuid },
                category: category.id,
                content: {}
            })
        }
    }, [category.id])

    const updateInputValue = (id: string, value: string) => {
        const content = {
            ...ticketStore.temporaryTickets[category.id].content
        }
        content[id] = value

        ticketStore.setTemporaryTicket(category.id, {
            ...ticketStore.temporaryTickets[category.id],
            content
        })
    }

    const submitTicket = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        ticketStore.submitTicket(category).then((ticketId) => {
            toast.success("The ticket was created.")
            router.push(`/tickets/${ticketId}`).then(() => {
                ticketStore.setTemporaryTicket(category.id, undefined)
            })
            ticketStore.deleteTemporaryTicket(category.id)
        }).catch(() => {
            toast.error("There was an issue creating your ticket.")
        })
    }

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3 pb-4 border-b-2 border-dark-light">
                <div className="flex justify-between items-start">
                    <div className="flex-grow">
                        <h1 className="mt-2 text-3xl text-gray-200">
                            Creating new Ticket
                        </h1>
                        <h1 className="text-lg text-gray-400">
                            {category.name}
                        </h1>
                        {category.description && (
                            <div className="mt-3">
                                <Collapse title={`Requirements and more information for ${category.name}`} isOpen={true}>
                                    <Renderer value={category.description}/>
                                </Collapse>
                            </div>
                        )}
                    </div>
                    <h1 className="text-accent-400">
                        <HiOutlinePencilAlt size="5rem" />
                    </h1>
                </div>
            </div>
            <form className="flex flex-col gap-4" onSubmit={(event) => submitTicket(event)}>
                <BaseInput
                    required={true}
                    placeholder="Title"
                    onChange={(event) => ticketStore.setTemporaryTicket(category.id, { ...ticketStore.temporaryTickets[category.id], title: event.target.value })}
                />
                <BasicCard>
                    <div className="flex flex-col gap-3">
                        {category.inputs.map((input, index) => (
                            <TicketCreateInput key={index} input={input} onChange={updateInputValue} content={ticketStore.temporaryTickets[category.id]?.content[input.label]} />
                        ))}
                    </div>
                    <BaseButton type="success" htmlType="submit">
                        Submit
                    </BaseButton>
                </BasicCard>
            </form>
        </div>
    )
})

export default CreateTicket
