import {FC} from "react";
import Link from "next/link"
import {formatDateToTime} from "../../../core/formatters";

interface ChatLogEntryProps {
    entry: ChatLogEntry,
    index: number,
    types: string[],
    users: string[],
    selectedLine?: number
}

const ChatLogEntry: FC<ChatLogEntryProps> = ({entry, index, types, selectedLine, users}) => {
    if (!users.includes(entry.executor.name) && !(users.length === 0)) {
        return <></>
    }

    if (!types.includes(entry.type)) {
        return <></>
    }

    return (
        <div id={`${index}`} className={`flex gap-4 items-center mb-1 rounded px-3 py-1 ${selectedLine === index && 'bg-shark-500'}`}>
            <Link href={`#L${index}`} passHref={true}>
                <a className="font-mono text-shark-200 hover:text-gray-200 cursor-pointer">
                    {index}
                </a>
            </Link>
            {entry.type === "MESSAGE" ? (
                <div className="flex flex-grow items-center space-x-1 text-gray-300">
                    <span className="text-blue-400 capitalize">[{entry.executor.group}] </span>
                    <span className="text-blue-400">{entry.executor.name} -</span>
                    <span>{entry.value}</span>
                </div>
            ) : (
                <div className="flex flex-grow items-center space-x-1 text-shark-300">
                    <span className="capitalize">[{entry.executor.group}] </span>
                    <span>{entry.executor.name} -</span>
                    <span className="italic">{entry.value}</span>
                </div>
            )}
            <span className="font-mono text-shark-200">
                {formatDateToTime(new Date(entry.executed), true)}
            </span>
        </div>
    )
}

export default ChatLogEntry
