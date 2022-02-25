import {makeAutoObservable, runInAction} from "mobx";
import {deleteChatLogFromID, fetchAllChatLogs, fetchChatLogFromID} from "../core/staff/chatlogs";

class ChatLogStore {

    chatLogs: Record<string, ChatLog> = {}
    allChatLogs: InitialChatLog[] = []

    constructor() {
        makeAutoObservable(this)
    }

    async fetchAllChatLogs(refetch = false) {
        if (this.allChatLogs.length > 0 && !refetch) {
            return this.allChatLogs
        }
        const allChatLogs = await fetchAllChatLogs()
        runInAction(() => {
            this.allChatLogs = allChatLogs
        })
    }

    async getChatLogFromID(id: string): Promise<ChatLog | undefined> {
        if (this.chatLogs[id]) {
            return this.chatLogs[id]
        }

        const chatLog = await fetchChatLogFromID(id)
        if (chatLog) {
            runInAction(() => {
                this.chatLogs[id] = chatLog
            })
        }
        return chatLog
    }

    async deleteChatLogFromID(id: string) {
        await deleteChatLogFromID(id)
        await this.fetchAllChatLogs(true)
        return true;
    }
}

const chatLogStore = new ChatLogStore()
export default chatLogStore
