import {authAPI} from "../api";
import {getGroup} from "./group";

export async function enrichWebUserWithGroup(webUser: WebInitialUser): Promise<WebUser> {
    const group = await getGroup(webUser.group)

    return {
        ...webUser,
        group: group || undefined
    }
}

export async function getWebUser(uuid: string): Promise<WebUser | null> {
    try {
        const data = await authAPI.get(`/users/${uuid}`)
        return await enrichWebUserWithGroup(data.data)
    }
    catch (error) {
        return null
    }
}
