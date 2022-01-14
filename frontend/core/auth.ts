import {authAPI} from "./api";

export async function basicAuth(userName: string, password: string): Promise<{ token: string, user: WebUser }> {
    try {
        const data = await authAPI.post('/login/basic', {
            userName,
            password,
            tokenLifeTime: 1
        })
        return data.data;
    }
    catch (error) {
        console.error(error)
        throw new Error(`Issue retrieving user "${userName}"`)
    }
}

export async function tokenAuth(token: string): Promise<WebUser> {
    try {
        const data = await authAPI.post('/login/token', {
            token
        })
        return data.data;
    }
    catch (error) {
        console.error(error)
        throw new Error(`Issue retrieving token "${token}"`)
    }
}

export async function getWebUser(uuid: string): Promise<WebUser> {
    try {
        const data = await authAPI.get(`/users/${uuid}`)
        return data.data
    }
    catch (error) {
        console.error(error)
        throw new Error(`Issue retrieving uuid "${uuid}"`)
    }
}
