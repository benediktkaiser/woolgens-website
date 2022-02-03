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
        const data = await axios.post(`https://api.mcsrvstat.us/2/revamp.woolgens.net`)

        if (data.data.online) {
            return data.data
        } else {
            return undefined;
        }
    } catch (error) {
        throw new Error(`Error retrieving data for "${serverIP}": ${error}`);
    }
}
