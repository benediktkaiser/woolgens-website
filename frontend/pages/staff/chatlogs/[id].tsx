import {observer} from "mobx-react-lite";
import React, {useEffect, useState} from "react";
import StaffLayout from "../../../layout/StaffLayout";
import {BaseButton} from "../../../components/common/BaseButton";
import {HiArrowLeft, HiOutlineTrash, HiOutlineLink} from "react-icons/hi"
import Link from "next/link"
import ChatLogEntry from "../../../components/staff/chatlogs/ChatLogEntry";
import {GetServerSideProps} from "next";
import chatLogStore from "../../../stores/ChatLogStore";
import CheckBox from "../../../components/common/forms/CheckBox";
import {useRouter} from "next/router";
import authStore from "../../../stores/AuthStore";
import ChatLogUserClick from "../../../components/staff/chatlogs/ChatLogUserClick";
import {RiFilterOffLine} from "react-icons/ri"
import Tooltip from "../../../components/common/ToolTip";

const StaffPage: NextPageWithLayout = observer(({chatLogID}) => {
    const [chatLog, setChatLog] = useState<ChatLog | undefined>(undefined)
    const [showTypes, setShowTypes] = useState(["MESSAGE", "COMMAND"])
    const [showUsers, setShowUsers] = useState([])
    const router = useRouter()

    const handleToggleType = (type: string, checked: boolean) => {
        if (checked) {
            setShowTypes([...showTypes, type])
        } else {
            setShowTypes(showTypes.filter(item => item !== type))
        }
    }

    const handleToggleUser = (username: string | "ALL") => {
        if (username === "ALL") {
            setShowUsers([])
            return;
        }
        if (!showUsers.includes(username)) {
            setShowUsers([...showUsers, username])
        } else {
            setShowUsers(showUsers.filter(item => item !== username))
        }
    }

    useEffect(() => {
        if (!!authStore.user) {
            chatLogStore.getChatLogFromID(chatLogID).then(chatLog => {
                setChatLog(chatLog)
            })
        }
    }, [chatLogID])

    if (!chatLog) {
        return (
            <div className="test">Not found!</div>
        )
    }

    return (
        <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center pb-5 border-b-2 border-dark-light">
                <Link href="/staff/chatlogs" passHref={true}>
                    <a>
                        <BaseButton type="dark">
                            <div className="flex gap-1 items-center">
                                <HiArrowLeft/> Back
                            </div>
                        </BaseButton>
                    </a>
                </Link>
                <div className="flex gap-3 items-center">
                    <BaseButton type="danger">
                        <div className="flex gap-1 items-center">
                            <HiOutlineTrash/>
                            Delete
                        </div>
                    </BaseButton>
                    <BaseButton type="primary">
                        <div className="flex gap-1 items-center">
                            <HiOutlineLink/>
                            Share
                        </div>
                    </BaseButton>
                </div>
            </div>
            <div className="flex gap-2 justify-between items-end w-full">
                <div className="ml-3">
                    <h1 className="text-2xl font-bold">
                        Chat-Log <span className="uppercase">#{chatLog.id}</span>
                    </h1>
                    <h3 className="text-gray-400">
                        Created by {chatLog.issuer.name} on {new Date(chatLog.registered).toDateString()}
                    </h3>
                </div>
                <div className="flex gap-2 items-center">
                    <CheckBox title="Commands" checked={showTypes.includes("COMMAND")}
                              onChange={(event) => handleToggleType("COMMAND", event.target.checked)}/>
                    <CheckBox title="Messages" checked={showTypes.includes("MESSAGE")}
                              onChange={(event) => handleToggleType("MESSAGE", event.target.checked)}/>
                </div>
            </div>
            <div className="flex items-stretch h-[70vh]">
                <div className="flex flex-col gap-5 items-center mt-1 h-full w-[80px]">
                    {chatLog.participants.map((participant, index) => (
                        <ChatLogUserClick key={index} participant={participant} toggle={handleToggleUser} selectedUsers={showUsers} />
                    ))}
                    {!(showUsers.length === 0) && (
                        <Tooltip text="Reset User filter" position="right">
                            <div onClick={() => handleToggleUser("ALL")} className="hover:bg-dark-light rounded border-2 border-red-500 hover:border-red-400 cursor-pointer w-[50px] h-[50px]">
                                <RiFilterOffLine className="p-2 w-full h-full text-red-500" />
                            </div>
                        </Tooltip>
                    )}
                </div>
                <div className="overflow-auto py-5 px-3 w-full h-full bg-shark-900 rounded-lg">
                    {chatLog.entries.map((entry, index) => (
                        <ChatLogEntry
                            key={index}
                            entry={entry}
                            index={index + 1}
                            types={showTypes}
                            users={showUsers}
                            selectedLine={parseInt(router ? router.asPath.split("#L")[1] : "0")}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
})

export const getServerSideProps: GetServerSideProps = async (context) => {
    const id = context.params['id']

    return {
        props: {
            chatLogID: id || null,
        },
    }
}

StaffPage.getLayout = function getLayout(page) {
    return (
        <StaffLayout permission="web.chatlogs.view">
            {page}
        </StaffLayout>
    )
}

export default StaffPage