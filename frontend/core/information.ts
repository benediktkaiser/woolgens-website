import {discordAPI} from "./api";
import axios from "axios";

export const getDiscordWidget = async () => {
    const data = await discordAPI.get("/widget.json")
    return data.data
}

export const getMinecraftServerData = async (serverIP: string) => {
    try {
        return axios.get(`https://api.mcsrvstat.us/2/${serverIP}`)
    } catch (error) {
        console.error(`Issue retrieving server information for "${serverIP}" - ${error}`)
    }
}
