import axios from "axios";

export const getDiscordWidget = async (serverID: string) => {
    try {
        return axios.get(`https://discord.com/api/guilds/${serverID}/widget.json`)
    } catch (error) {
        throw error
    }
}

export const getMinecraftServerData = async (serverIP: string) => {
    try {
        return axios.get(`https://api.mcsrvstat.us/2/${serverIP}`)
    } catch (error) {
        throw error
    }
}
