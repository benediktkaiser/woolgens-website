import {chatLogAPI} from "../api";

export async function fetchChatLogFromID(id: string): Promise<ChatLog | undefined> {
    try {
        const data = await chatLogAPI.get(`/chatlogs/${id}`)
        return data.data
    } catch (error) {
        console.error(error)
        return undefined;
    }
}
