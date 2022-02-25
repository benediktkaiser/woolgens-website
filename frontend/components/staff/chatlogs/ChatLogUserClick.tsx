import Avatar from "../../common/Avatar";
import ToolTip from "../../common/ToolTip";
import React, {FC} from "react";

interface ChatLogUserClickProps {
    participant: InitialChatLogPlayer,
    toggle: (username: string) => void,
    selectedUsers: string[]
}

const ChatLogUserClick: FC<ChatLogUserClickProps> = ({participant, toggle, selectedUsers}) => {
    const selected = selectedUsers.includes(participant.name) || selectedUsers.length === 0

    return (
        <ToolTip text={<span className="text-blue-400">{participant.name}</span>} position="right">
            <div onClick={() => toggle(participant.name)} className="overflow-hidden relative rounded cursor-pointer">
                <Avatar player={participant.uuid} size={50}/>
                <div
                    className={`absolute top-0 left-0 w-full h-full transition ${selected ? "opacity-0" : "opacity-70"} bg-black hover:opacity-0`}/>
            </div>
        </ToolTip>
    )
}

export default ChatLogUserClick
