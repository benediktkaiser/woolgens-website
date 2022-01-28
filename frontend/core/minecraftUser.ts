import {minecraftUserAPI} from "./api";
import landStore from "../stores/LandStore";

export async function getMinecraftUser(uuid: string): Promise<MinecraftUser> {
    try {
        const data = await minecraftUserAPI.get(`/users/${uuid}`)
        const landData = await landStore.getLand(data.data.land)

        return {
            ...data.data,
            land: {
                ...landData
            }
        }
    }
    catch (error) {
        console.error(error)
        throw new Error(`Issue retrieving uuid "${uuid}"`)
    }
}
