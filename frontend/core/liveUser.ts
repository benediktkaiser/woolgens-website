import {liveAPI} from "./api";

export async function fetchLiveUser(uuid: string): Promise<LiveUser | null> {
    try {
        const data = await liveAPI.get(`/global/player/${uuid}`)
        return data.data
    } catch (error) {
        console.error(`Issue retrieving Live User for uuid "${uuid}" - ${error}`)
        return null;
    }
}
