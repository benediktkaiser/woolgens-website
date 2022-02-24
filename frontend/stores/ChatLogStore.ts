import {makeAutoObservable, runInAction} from "mobx";
import {fetchChatLogFromID} from "../core/staff/chatlogs";

class ChatLogStore {

    chatLogs: Record<string, ChatLog> = {}

    constructor() {
        makeAutoObservable(this)
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
}

const chatLogStore = new ChatLogStore()
export default chatLogStore
