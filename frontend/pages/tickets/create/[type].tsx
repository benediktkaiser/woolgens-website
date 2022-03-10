import {observer} from "mobx-react-lite";
import NavbarLayout from "../../../layout/NavbarLayout";
import React, {useEffect, useState} from "react";
import SEO from "../../../components/SEO"
import BasicCard from "../../../components/common/cards/BasicCard";
import {useRouter} from "next/router";
import ticketCategoryStore from "../../../stores/tickets/TicketCategoryStore";
import BreadCrumbs from "../../../components/common/BreadCrumbs";
import Renderer from "../../../components/quill/Renderer";
import CardWithHeader from "../../../components/common/cards/CardWithHeader";
import BaseInput from "../../../components/common/forms/BaseInput";
import {BaseButton} from "../../../components/common/BaseButton";
import TicketCreateInput from "../../../components/tickets/TicketCreateInput";

const IndexPage: NextPageWithLayout = observer(() => {
    const [category, setCategory] = useState<TicketCategory>(null)
    const [ticket, setTicket] = useState<InitialTicket>({
            title: '',
            issuer: undefined,
            category: undefined,
            content: {}
    })

    const router = useRouter()
    const { type } = router.query

    useEffect(() => {
        if (type) {
            setCategory(ticketCategoryStore.categories[type.toString()])
        }
    }, [type])

    useEffect(() => {
        if (category) {
            setTicket({...ticket, category: category.id, issuer: { name: "test", uuid: "test" }})
        }
    }, [category])

    if (!category) {
        return (
            <div>
                404
            </div>
        )
    }

    const updateInputValue = (id: string, value: string) => {
        const content = {
            ...ticket.content
        }
        content[id] = value

        setTicket({
            ...ticket,
            content
        })
    }

    return (
        <div>
            <SEO seo={{
                title: "Ticket",
                description: "Welcome to the official Woolgens homepage! Here you can find news, statistics, interact with other users and learn more about our network.",
                imageSRC: "/seo/News.jpg"
            }}/>
            <div className="flex justify-between items-end px-1">
                <div>
                    <BreadCrumbs pathName={router.asPath || ''} />
                    <h1 className="mt-2 mb-4 text-3xl font-semibold text-gray-200">
                        Creating new Ticket
                    </h1>
                </div>
                <h1 className="mt-2 mb-4 text-xl text-shark-200">
                    {category.name}
                </h1>
            </div>
            <div className="grid grid-cols-12 gap-4">
                <div className="flex flex-col col-span-12 2xl:col-span-9 gap-3">
                    <BaseInput
                        placeholder="Title"
                        onChange={event => setTicket({...ticket, title: event.target.value})}
                    />
                    <BasicCard padding="p-3">
                        <div className="flex flex-col gap-4">
                            {category.inputs.map((input, index) => (
                                <TicketCreateInput key={index} input={input} onChange={updateInputValue} content={ticket.content[input.label]} />
                            ))}
                        </div>
                        <div className="mt-4">
                            <BaseButton type="primary" onClick={() => console.info(ticket)}>
                                Submit Ticket
                            </BaseButton>
                        </div>
                    </BasicCard>
                </div>
                <div className="col-span-12 2xl:col-span-3">
                    <CardWithHeader title="Guidelines" padding="p-0">
                        <Renderer value={category.description} />
                    </CardWithHeader>
                </div>
            </div>
        </div>
    )
})

IndexPage.getLayout = function getLayout(page) {
    return (
        <NavbarLayout>
            {page}
        </NavbarLayout>
    )
}

export default IndexPage
