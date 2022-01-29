import {minecraftUserAPI} from "./api";
import landStore from "../stores/LandStore";

export async function getMinecraftUser(uuid: string): Promise<MinecraftUser> {
    try {
        const data = await minecraftUserAPI.get(`/users/${uuid}`)

        let landData = undefined
        if (data.data.land !== "") {
            landData = {
                ...await landStore.getLand(data.data.land)
            }
        }

        return {
            ...data.data,
            land: landData,
        }
    }
    catch (error) {
        console.error(error)
        throw new Error(`Issue retrieving Minecraft User for uuid "${uuid}"`)
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

export async function getUserNames() {
    try {
        const data = await minecraftUserAPI.get(`/users?small=true`)
        return data.data
    }
    catch (error) {
        console.error(error)
        throw new Error(`Issue retrieved all usernames`)
    }
}

export function getLatestSeasonStats(user: MinecraftUser): MinecraftUserSeason {
    const latestSeason = Object.keys(user.seasons).reverse()[0]
    return user.seasons[latestSeason]
}
