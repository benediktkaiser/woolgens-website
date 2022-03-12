import {makeAutoObservable, runInAction} from "mobx";
import {deleteChatLogFromID, fetchAllChatLogs, fetchChatLogFromID} from "../core/staff/chatlogs";
import authStore from "./AuthStore";

class ChatLogStore {

    chatLogs: Record<string, ChatLog> = {}
    allChatLogs: InitialChatLog[] = []

    constructor() {
        makeAutoObservable(this)
    }

    async fetchAllChatLogs(fetch = false) {
        if (this.allChatLogs.length > 0 && !fetch) {
            return this.allChatLogs
        }
        const allChatLogs = await fetchAllChatLogs()
        runInAction(() => {
            this.allChatLogs = allChatLogs.reverse()
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

    getChangeLogsFromUUID(uuid: string, limit = 5): InitialChatLog[] {
        return this.allChatLogs.filter((chatLog, index) => {
            if (index > limit) {
                return false
            }
            return chatLog.issuer.uuid === uuid;
        })
    }

    async deleteChatLogFromID(id: string) {
        if (authStore.hasPermission("web.chatlogs.delete")) {
            await deleteChatLogFromID(id)
            await this.fetchAllChatLogs(true)
            return true;
        }
        return false;
    }
}

const chatLogStore = new ChatLogStore()
export default chatLogStore
