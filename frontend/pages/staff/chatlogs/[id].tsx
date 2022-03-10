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
import ChatLogUserClick from "../../../components/staff/chatlogs/ChatLogUserClick";
import {RiFilterOffLine} from "react-icons/ri"
import Tooltip from "../../../components/common/ToolTip";
import authStore from "../../../stores/AuthStore";
import {AiOutlineLoading3Quarters} from "react-icons/ai";
import {confirmAlert} from 'react-confirm-alert';
import ConfirmModal from "../../../components/common/ConfirmModal";
import {toast} from "react-toastify";
import {BASE_URL} from "../../../core/constants";

const copyLink = (id: string) => {
    navigator.clipboard.writeText(`${BASE_URL}/staff/chatlogs/${id}`).then(() => toast.success(`The link to chat log #${id} was copied to your clipboard!`))
}

const StaffPage: NextPageWithLayout = observer(({chatLogID}) => {
    const [chatLog, setChatLog] = useState<ChatLog>(undefined)
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

    const deleteChatLog = () => {
        toast.promise(
            chatLogStore.deleteChatLogFromID(chatLogID),
            {
                pending: `ChatLog #${chatLogID} is being deleted. Please wait a moment.`,
                success: `ChatLog #${chatLogID} was successfully deleted.`,
                error: `ChatLog #${chatLogID} could not be deleted.`
            }
        ).then(() => router.push("/staff/chatlogs"))
    }

    const openDeleteModal = () => {
        confirmAlert({
            customUI: ({onClose}) => {
                return <ConfirmModal
                    text={`Are you sure you want to delete ChatLog#${chatLogID}? This action is irreversible and cannot be undone.`}
                    close={onClose}
                    confirm={deleteChatLog}
                />
            }
        });
    }

    useEffect(() => {
        if (!authStore.loading) {
            chatLogStore.getChatLogFromID(chatLogID).then(chatLog => {
                if (!chatLog) {
                    router.push('/staff/chatlogs').finally(() => {
                        toast.error(`ChatLog #${chatLogID} does not exist.`)
                    })
                    return;
                }
                setChatLog(chatLog)
                if (document !== undefined) {
                    const element = document.getElementById(router ? router.asPath.split("#L")[1] : "0")
                    if (element) element.scrollIntoView({behavior: 'smooth'})
                }
            })
        }
    }, [chatLogID, router])

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
                <div className="hidden lg:flex gap-3 items-center">
                    <BaseButton type="primary" onClick={() => copyLink(chatLogID)}>
                        <div className="flex gap-1 items-center">
                            <HiOutlineLink/>
                            Share
                        </div>
                    </BaseButton>
                    {authStore.hasPermission("web.chatlogs.delete") && (
                        <BaseButton type="danger" onClick={openDeleteModal}>
                            <div className="flex gap-1 items-center">
                                <HiOutlineTrash/>
                                Delete
                            </div>
                        </BaseButton>
                    )}
                </div>
            </div>
            {!chatLog ? (
                <div className="flex flex-col items-center mx-auto mt-10 w-full">
                    <AiOutlineLoading3Quarters size="2rem" className="animate-spin"/>
                    <div className="mt-8 text-center">
                        <h1 className="w-full text-3xl font-bold">
                            Retrieving ChatLog...
                        </h1>
                        <h2 className="text-gray-300">
                            Please wait a moment
                        </h2>
                    </div>
                </div>
            ): (
                <>
                    <div className="flex gap-2 justify-center lg:justify-between items-end w-full">
                        <div className="hidden lg:block ml-3">
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
                    <div className="flex items-stretch max-h-[70vh]">
                        <div className="hidden lg:flex flex-col gap-5 items-center mt-1 h-full w-[80px]">
                            {chatLog.participants.map((participant, index) => (
                                <ChatLogUserClick key={index} participant={participant} toggle={handleToggleUser}
                                                  selectedUsers={showUsers}/>
                            ))}
                            {!(showUsers.length === 0) && (
                                <Tooltip text="Reset User filter" position="right">
                                    <div onClick={() => handleToggleUser("ALL")}
                                         className="hover:bg-dark-light rounded border-2 border-red-500 hover:border-red-400 cursor-pointer w-[50px] h-[50px]">
                                        <RiFilterOffLine className="p-2 w-full h-full text-red-500"/>
                                    </div>
                                </Tooltip>
                            )}
                        </div>
                        <div className="overflow-auto py-5 pr-5 pl-2 w-full h-full bg-shark-900 rounded-lg">
                            <table className="w-full table-fixed">
                                <tbody className="w-full">
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
                                </tbody>
                            </table>
                        </div>
                    </div>
                </>
            )}
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
