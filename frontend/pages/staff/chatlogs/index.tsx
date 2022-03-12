import {observer} from "mobx-react-lite";
import React, {useEffect, useState} from "react";
import StaffLayout from "../../../layout/StaffLayout";
import chatLogStore from "../../../stores/ChatLogStore";
import ChatLogBox from "../../../components/staff/chatlogs/ChatLogBox";
import authStore from "../../../stores/AuthStore";
import Pagination from "../../../components/common/pagination/Pagination";
import PaginationWrapper from "../../../components/common/pagination/PaginationWrapper";
import ChatLogRow from "../../../components/staff/chatlogs/ChatLogRow";
import {MdOutlineChatBubble} from "react-icons/md";
import SEO from "../../../components/SEO";

const pagination = new Pagination({itemsPerPage: 5, showPagerNumbers: true, itemName: "chat logs"})

const StaffPage: NextPageWithLayout = observer(() => {
    const [items, setItems] = useState<InitialChatLog[]>(undefined)

    useEffect(() => {
        chatLogStore.fetchAllChatLogs().finally(() => {
            pagination.setEntries(chatLogStore.allChatLogs, (items: InitialChatLog[]) => {
                setItems(items)
            })
        })
    }, [])

    return (
        <div className="flex flex-col space-y-10">
            <SEO seo={{
                title: `Chatlogs`
            }} />
            {chatLogStore.getChangeLogsFromUUID(authStore.user.uuid).length > 0 && (
                <section className="flex flex-col space-y-4">
                    <h1 className="ml-1 text-xl font-bold text-gray-400">
                        Your recent ChatLogs
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-5 gap-5">
                        {chatLogStore.getChangeLogsFromUUID(authStore.user.uuid, 5).map((chatLog, index) => (
                            <ChatLogBox key={index} chatLog={chatLog} />
                        ))}
                    </div>
                </section>
            )}
            <section className="flex flex-col">
                <h1 className="ml-1 text-xl font-bold text-gray-400">
                    All Changelogs
                </h1>
                <PaginationWrapper pagination={pagination} loading={items === undefined}>
                    {items ? (
                        <div className="flex flex-col space-y-3">
                            {items.map((chatLog, index) =>
                                <ChatLogRow key={index} chatLog={chatLog} />
                            )}
                        </div>
                    ): (
                        <div className="flex items-center my-10">
                            <MdOutlineChatBubble size="5rem" className="text-red-400"/>
                            <div className="ml-2">
                                <h1 className="text-3xl">
                                    No ChatLogs
                                </h1>
                                <h3 className="text-lg text-gray-400">
                                    No ChatLogs have been recorded yet.
                                </h3>
                            </div>
                        </div>
                    )}
                </PaginationWrapper>
            </section>
        </div>
    )
})

StaffPage.getLayout = function getLayout(page) {
    return (
        <StaffLayout permission="web.chatlogs.view">
            {page}
        </StaffLayout>
    )
}

export default StaffPage
