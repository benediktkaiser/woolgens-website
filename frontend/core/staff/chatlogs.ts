import {chatLogAPI} from "../api";
import groupStore from "../../stores/GroupStore";

function enrichChatLogWithParticipants(chatLog: InitialChatLog): InitialChatLogPlayer[] {
    const participants: Record<string, { player: InitialChatLogPlayer, messageAmount: number }> = {}
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

    const participantsArray: InitialChatLogPlayer[] = []
    sortedParticipants.map((result) => {
        const player = result[1].player
        participantsArray.push(player)
    })

    return participantsArray
}

async function enrichChatLogWithGroups(chatLog: InitialChatLog, participants: InitialChatLogPlayer[]): Promise<ChatLog> {
    const groups = await groupStore.fetchGroups()
    const entries: ChatLogEntry[] = []

    chatLog.entries.map((entry) => {
        entries.push({
            ...entry,
            executor: {
                ...entry.executor,
                group: groups[entry.executor.group]
            },
        })
    })

    return {
        ...chatLog,
        entries,
        participants
    }
}

export async function fetchChatLogFromID(id: string): Promise<ChatLog | undefined> {
    try {
        const data = await chatLogAPI.get(`/chatlogs/${id}`)
        const participants = enrichChatLogWithParticipants(data.data)
        return await enrichChatLogWithGroups(data.data, participants);
    } catch (error) {
        console.error(error)
        return undefined;
    }
}

export async function deleteChatLogFromID(id: string) {
    try {
        await chatLogAPI.delete(`/chatlogs/${id}`)
    } catch (error) {
        console.error(error)
    }
}

export async function fetchAllChatLogs(): Promise<InitialChatLog[]> {
    try {
        const data = await chatLogAPI.get(`/chatlogs`)
        return data.data
    } catch (error) {
        console.error(error)
        return [];
    }
}
