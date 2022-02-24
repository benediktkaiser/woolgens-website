import {FC} from "react";
import Link from "next/link"

interface ChatLogEntryProps {
    entry: ChatLogEntry,
    index: number,
    types: string[],
    selectedLine?: number
}

const ChatLogEntry: FC<ChatLogEntryProps> = ({entry, index, types, selectedLine}) => {
    const date = new Date(entry.executed)

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
                {date.getHours()}:{date.getUTCMinutes()}:{date.getSeconds()}
            </span>
        </div>
    )
}

export default ChatLogEntry
