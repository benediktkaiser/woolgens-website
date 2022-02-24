import {chatLogAPI} from "../api";

function enrichChatLogWithParticipants(chatLog: InitialChatLog): ChatLog {
    const participants: Record<string, { player: ChatLogPlayer, messageAmount: number }> = {}
    chatLog.entries.map((entry) => {
        if (!participants[entry.executor.name]) {
            participants[entry.executor.name] = {
                player: entry.executor,
                messageAmount: 1
            }
        } else {
            participants[entry.executor.name].messageAmount++
        }
    })

    const sortedParticipants = Object.entries(participants).sort(([, firstMember], [, secondMember]) => {
        if (firstMember.player.name === chatLog.target.name) {
            return -1
        }
        if (secondMember.player.name === chatLog.target.name) {
            return 1
        }
        if (firstMember.messageAmount > secondMember.messageAmount) {
            return -1
        }
        if (secondMember.messageAmount > firstMember.messageAmount) {
            return 1
        }
        return 0
    })

    const participantsArray: ChatLogPlayer[] = []
    sortedParticipants.map((result) => {
        const player = result[1].player
        participantsArray.push(player)
    })

    return {
        ...chatLog,
        participants: participantsArray
    }
}

export async function fetchChatLogFromID(id: string): Promise<ChatLog | undefined> {
    try {
        const data = await chatLogAPI.get(`/chatlogs/${id}`)
        return enrichChatLogWithParticipants(data.data)
    } catch (error) {
        console.error(error)
        return undefined;
    }
}
