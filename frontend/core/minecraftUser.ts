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

export async function getUsersSorted(sorted: string, pageIndex: number, pageSize: number): Promise<MinecraftUser[]> {
    try {
        const data = await minecraftUserAPI.get(`/users?sorted=${sorted}&pageindex=${pageIndex}&pagesize=${pageSize}`)

        return data.data
    }
    catch (error) {
        console.error(error)
        throw new Error(`Issue retrieved user sorted by "${sorted}" from page ${pageIndex} with ${pageSize} entries`)
    }
}
