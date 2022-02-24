import {authAPI} from "./api";

async function enrichWebUserWithGroup(webUser: WebInitialUser): Promise<WebUser> {
    const group = await getGroup(webUser.group)

    return {
        ...webUser,
        group: group || undefined
    }
}

export async function basicAuth(userName: string, password: string): Promise<{ token: string, user: WebUser } | undefined> {
    try {
        const data = await authAPI.post('/login/basic', {
            userName,
            password,
            tokenLifeTime: "WEEK" // DAY, WEEK OR MONTH
        })

        const user = await enrichWebUserWithGroup(data.data.user)
        return {
            token: data.data.token,
            user
        };
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
        return await enrichWebUserWithGroup(data.data.user);
    }
    catch (error) {
        return undefined;
    }
}

export async function getWebUser(uuid: string): Promise<WebUser | undefined> {
    try {
        const data = await authAPI.get(`/users/${uuid}`)
        return await enrichWebUserWithGroup(data.data)
    }
    catch (error) {
        return null
    }
}

export async function getGroup(id: string): Promise<Group> {
    try {
        const data = await authAPI.get(`/groups/${id}`)
        return {
            ...data.data,
            isStaff: data.data.role === "Admin" || data.data.role === "Moderator"
        }
    }
    catch (error) {
        return undefined
    }
}

export async function getTemporaryToken(token: string): Promise<TemporaryToken> {
    try {
        const data = await authAPI.get(`/tokens/${token}`);
        return data.data
    }
    catch (error) {
        return undefined
    }
}

export async function registerUserWithToken(token: TemporaryToken, password: string): Promise<boolean> {
    try {
        token.data["password"] = password
        await authAPI.post(`/register`, token);
        return true;
    } catch (error) {
        console.error(error)
        return false
    }
}
