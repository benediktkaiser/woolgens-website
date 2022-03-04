import memoizee from "memoizee"
import {minecraftUserAPI} from "../api";
import {throwError} from "../error";
import {getLandByName} from "../land";

const USERS_SORTED_CACHE = 30 * 1000
const USER_NAMES_CACHE = 5 * 60 * 1000

export function getLatestSeasonStats(user: MinecraftUser): MinecraftUserSeason {
    const latestSeason = Object.keys(user.seasons)[0]
    return user.seasons[latestSeason]
}

async function enrichMinecraftUserWithLand(minecraftUser: MinecraftInitialUser): Promise<MinecraftUser> {
    let landData = null
    if (minecraftUser.land !== "") {
        const land = await getLandByName(minecraftUser.land)
        if (land !== undefined) {
            landData = {
                ...await getLandByName(minecraftUser.land)
            }
        }
    }
    return {
        ...minecraftUser,
        land: landData
    }
}

export async function getMinecraftUser(uuid: string): Promise<MinecraftUser> {
    try {
        const data = await minecraftUserAPI.get(`/users/${uuid}`)
        return await enrichMinecraftUserWithLand(data.data);
    } catch (error) {
        throwError(`Issue retrieving Minecraft User for uuid "${uuid}" - ${error}`)
        return;
    }
}

export async function fetchUsersSorted(sorted: string, pageIndex: number, pageSize: number): Promise<MinecraftUser[]> {
    try {
        const data = await minecraftUserAPI.get(`/users?sorted=${sorted}&pageindex=${pageIndex}&pagesize=${pageSize}`)
        return data.data
    } catch (error) {
        throwError(`Issue retrieved user sorted by "${sorted}" from page ${pageIndex} with ${pageSize} entries" - ${error}`)
        return;
    }
}

export const testfetchUsersSorted = memoizee(fetchUsersSorted, {
    maxAge: USERS_SORTED_CACHE,
    promise: true,
    length: 3,
});

async function _fetchUserNames() {
    try {
        const data = await minecraftUserAPI.get(`/users?small=true`)
        return data.data
    } catch (error) {
        throwError(`Issue retrieved all usernames" - ${error}`)
        return;
    }
}

export const fetchUserNames = memoizee(_fetchUserNames, {
    maxAge: USER_NAMES_CACHE,
    promise: true,
});
