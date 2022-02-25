import {authAPI} from "./api";
import {enrichWebUserWithGroup} from "./user/webUser";

export async function authenticateWithUserNameAndPassword(userName: string, password: string): Promise<{ token: string, user: WebUser } | undefined> {
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

export async function authenticateWithToken(token: string): Promise<WebUser | undefined> {
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
