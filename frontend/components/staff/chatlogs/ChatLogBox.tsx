import {FC} from "react";
import Avatar from "../../common/Avatar";
import {BaseButton} from "../../common/BaseButton";
import {toast} from "react-toastify";
import Link from "next/link"

interface ChatLogBoxProps {
    chatLog: InitialChatLog
}

const copyLink = (id: string) => {
    navigator.clipboard.writeText(`https://staging.woolgens.net/staff/chatlogs/${id}`).then(() => toast.success(`The link to chat log #${id} was copied to your clipboard!`))
}

const ChatLogBox: FC<ChatLogBoxProps> = ({chatLog}) => {
    return (
        <div className="p-4 w-full bg-shark-500 rounded transition scale-100 hover:scale-101">
            <div className="flex justify-between items-center">
                <div className="flex-grow pr-3">
                    <h1 className="text-lg">
                        ChatLog <span className="font-bold text-accent-500">#{chatLog.id}</span>
                    </h1>
                    <hr className="my-2 border-shark-400" />
                </div>
                <Avatar player={chatLog.target.uuid} size={50} />
            </div>
            <h2>
                Target: <span className="italic">{chatLog.target.name}</span>
            </h2>
            <h2>
                Issuer: <span className="italic">{chatLog.issuer.name}</span>
            </h2>
            <br />
            <h2>
                Date: <span className="italic">{new Date(chatLog.registered).toDateString()}</span>
            </h2>
            <hr className="my-3 border-shark-400" />
            <div className="flex justify-end space-x-2">
                <BaseButton type="dark-active" onClick={() => copyLink(chatLog.id)}>
                    Copy Link
                </BaseButton>
                <BaseButton type="primary">
                    <Link href={`/staff/chatlogs/${chatLog.id}`}>
                        View
                    </Link>
                </BaseButton>
            </div>
        </div>
    )
}

export default ChatLogBox
