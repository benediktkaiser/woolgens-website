import {authAPI} from "./api";

export async function basicAuth(userName: string, password: string): Promise<{ token: string, user: WebUser } | undefined> {
    try {
        const data = await authAPI.post('/login/basic', {
            userName,
            password,
            tokenLifeTime: "DAY" // DAY, WEEK OR MONTH
        })
        return data.data;
    }
    catch (error) {
        return undefined;
    }
}

export async function tokenAuth(token: string): Promise<WebUser | undefined> {
    try {
        const data = await authAPI.post('/login/token', {
            token
        })
        return data.data.user;
    }
    catch (error) {
        return undefined;
    }
}

export async function getWebUser(uuid: string): Promise<WebUser | undefined> {
    try {
        const data = await authAPI.get(`/users/${uuid}`)
        return data.data
    }
    catch (error) {
        return undefined
    }
}
