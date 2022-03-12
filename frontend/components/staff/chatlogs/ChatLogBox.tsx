import Avatar from "../../common/Avatar";
import Link from "next/link"
import {formatDate, timeSince} from "../../../core/formatters";

const ChatLogBox = ({chatLog}: {chatLog: InitialChatLog}) => {
    return (
        <Link href={`/staff/chatlogs/${chatLog.id}`} passHref={true}>
            <a className="p-4 hover:bg-dark-light rounded-lg hover:shadow-xl cursor-pointer bg-dark-light/80">
                <div className="flex gap-4 justify-between items-center">
                    <h1 className="text-xl">
                        ChatLog #<span className="uppercase">{chatLog.id}</span>
                    </h1>
                    <span className="py-1 px-2 text-xs text-white bg-accent-500 rounded">
                    {timeSince(new Date(chatLog.registered))}
                </span>
                </div>

                <div className="my-4">
                    <ul className="text-gray-500">
                        <li>
                            Target: <span>{chatLog.target.name}</span>
                        </li>
                        <li>
                            Issued: <span>{formatDate(new Date(chatLog.registered))}</span>
                        </li>
                    </ul>
                </div>

                <div className="flex gap-4 items-center pt-3 border-t-2 border-t-shark-400/80">
                    <Avatar player={chatLog.target.uuid} size={35}/>
                    <span>{chatLog.target.name}</span>
                </div>
            </a>
        </Link>
    )
}

export default ChatLogBox
