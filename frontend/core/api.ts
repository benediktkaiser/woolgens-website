import axios from "axios"

const DEFAULT_API = {
    timeout: 3000,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + process.env.NEXT_PUBLIC_DEV_TOKEN
    }
}

export function changeAPIToken(token: string) {
    axios.defaults.headers.common = {
        'Authorization': "Bearer " + token
    }
}

export const authAPI = axios.create({
    baseURL: process.env.NEXT_PUBLIC_AUTH_ENDPOINT,
    ...DEFAULT_API
});

export const minecraftUserAPI = axios.create({
    baseURL: process.env.NEXT_PUBLIC_MINECRAFT_USER_ENDPOINT,
    ...DEFAULT_API
});

export const landAPI = axios.create({
    baseURL: process.env.NEXT_PUBLIC_LAND_ENDPOINT,
    ...DEFAULT_API
});

export const changeLogAPI = axios.create({
    baseURL: process.env.NEXT_PUBLIC_CHANGELOG_ENDPOINT,
    ...DEFAULT_API
});

export const discordAPI = axios.create({
    baseURL: `https://discord.com/api/guilds/${process.env.NEXT_PUBLIC_DISCORD_SERVER_ID}`,
    ...DEFAULT_API
});
