import {observer} from "mobx-react-lite";
import React, {useEffect} from "react";
import StaffLayout from "../../../layout/StaffLayout";
import chatLogStore from "../../../stores/ChatLogStore";
import ChatLogBox from "../../../components/staff/chatlogs/ChatLogBox";

const StaffPage: NextPageWithLayout = observer(() => {

    useEffect(() => {
        chatLogStore.fetchAllChatLogs().catch(error => console.error(error))
    }, [])

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-5">
            {chatLogStore.allChatLogs.map((chatLog, index) => <ChatLogBox key={index} chatLog={chatLog} />)}
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
