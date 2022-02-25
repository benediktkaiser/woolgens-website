import axios from "axios"

const DEFAULT_API = {
    timeout: 3000,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_DEV_TOKEN || ''}`
    }
}

export function changeAPIToken(token: string) {
    return new Promise((resolve) => {
        const bearer = `Bearer ${token}`;

        chatLogAPI.defaults.headers['Authorization'] = bearer;
        landAPI.defaults.headers['Authorization'] = bearer;
        authAPI.defaults.headers['Authorization'] = bearer;
        minecraftUserAPI.defaults.headers['Authorization'] = bearer;
        resolve(true)
    })
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

export const chatLogAPI = axios.create({
    baseURL: process.env.NEXT_PUBLIC_CHATLOG_ENDPOINT,
    ...DEFAULT_API
});

export const liveAPI = axios.create({
    baseURL: process.env.NEXT_PUBLIC_LIVE_ENDPOINT,
    ...DEFAULT_API
});
