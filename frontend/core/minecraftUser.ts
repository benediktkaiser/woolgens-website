import {minecraftUserAPI} from "./api";

export async function getMinecraftUser(uuid: string): Promise<MinecraftUser> {
    try {
        const data = await minecraftUserAPI.get(`/users/${uuid}`)
        return data.data
    }
    catch (error) {
        console.error(error)
        throw new Error(`Issue retrieving uuid "${uuid}"`)
    }
}
