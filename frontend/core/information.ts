import axios from "axios";
import {liveAPI} from "./api";

export const getDiscordWidget = async (serverID: string) => {
    try {
        const data = await axios.get(`https://discord.com/api/guilds/${serverID}/widget.json`);
        return data.data
    } catch (error) {
        console.error(error)
        return undefined
    }
}

export const getMinecraftServerData = async (serverIP: string) => {
    try {
        const data = await axios.get(`https://api.mcsrvstat.us/2/${serverIP}`)

        if (data.data.online) {
            return data.data
        } else {
            return undefined;
        }
    } catch (error) {
        console.error(error)
        return undefined
    }
}

export async function getVotePartyStatus(): Promise<VotePartyStatus> {
    try {
        const data = await liveAPI.get(`/vote/counter`)
        return data.data
    } catch (error) {
        console.error(`Issue retrieving vote party status - ${error}`)
        return {
            count: 0,
            maxCount: 100
        };
    }
}

