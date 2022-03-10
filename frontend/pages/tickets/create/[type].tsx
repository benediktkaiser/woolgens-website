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
import ticketStore from "../../../stores/tickets/TicketStore";

const IndexPage: NextPageWithLayout = observer(() => {
    const [category, setCategory] = useState<TicketCategory>(null)

    const router = useRouter()
    const { type } = router.query

    const getTemporaryTicket = () => {
        if (!category) {
            return undefined
        }
        return ticketStore.temporaryTickets[category.id]
    }

    useEffect(() => {
        if (type) {
            setCategory(ticketCategoryStore.categories[type.toString()])
        }
    }, [type])

    useEffect(() => {
        if (category) {
            if (!getTemporaryTicket()) {
                resetTicket(category.id)
            }
        }
    }, [category])

    if (!category || !getTemporaryTicket()) {
        return (
            <div>
                404
            </div>
        )
    }

    const resetTicket = (categoryId: string) => {
        ticketStore.setTemporaryTicket(categoryId, {
            title: '',
            issuer: { name: "test", uuid: "test" },
            category: categoryId,
            content: {}
        })
    }

    const updateInputValue = (id: string, value: string) => {
        const content = {
            ...getTemporaryTicket().content
        }
        content[id] = value

        ticketStore.setTemporaryTicket(category.id, {
            ...getTemporaryTicket(),
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
                    <h1 className="mt-2 mb-4 text-3xl text-gray-200">
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
                        defaultValue={getTemporaryTicket().title}
                        placeholder="Title"
                        onChange={event => ticketStore.setTemporaryTicket(category.id, {...getTemporaryTicket(), title: event.target.value})}
                    />
                    <BasicCard padding="p-3">
                        <div className="flex flex-col gap-4">
                            {category.inputs.map((input, index) => (
                                <TicketCreateInput key={index} input={input} onChange={updateInputValue} content={getTemporaryTicket().content[input.label]} />
                            ))}
                        </div>
                        <div className="mt-4">
                            <BaseButton type="primary" onClick={() => console.info(getTemporaryTicket())}>
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
