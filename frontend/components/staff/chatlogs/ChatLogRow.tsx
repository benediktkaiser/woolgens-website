import Avatar from "../../common/Avatar";
import {timeSince} from "../../../core/formatters";
import Link from "next/link"

const ChatLogRow = ({chatLog}: {chatLog: InitialChatLog}) => {
    return (
        <Link href={`/staff/chatlogs/${chatLog.id}`} passHref={true}>
            <a className="p-4 hover:bg-dark-light rounded-lg hover:shadow-xl cursor-pointer bg-dark-light/80">
                <div className="flex justify-between items-center">
                    <div>
                        <div className="flex items-center space-x-3">
                        <span className="py-1 px-2 text-xs text-white bg-accent-500 rounded">
                            {timeSince(new Date(chatLog.registered))}
                        </span>
                            <h1 className="text-xl">
                                ChatLog #<span className="uppercase">{chatLog.id}</span>
                            </h1>
                        </div>
                        <div className="my-1">
                            <ul className="text-gray-500">
                                <li>
                                    Target: <span>{chatLog.target.name}</span>
                                </li>
                                <li>
                                    Issuer: <span>{chatLog.issuer.name}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <Avatar player={chatLog.target.uuid} size={50}/>
                    </div>
                </div>
            </a>
        </Link>
    )
}

export default ChatLogRow
