import {getMinecraftUser, getUserNames} from "./minecraftUser";
import {getWebUser} from "./auth";
import {fetchLiveUser} from "./liveUser";

export async function getUserByUUID(uuid: string): Promise<User> {
    const minecraftUser = await getMinecraftUser(uuid);
    const webUser = await getWebUser(uuid);
    const liveUser = await fetchLiveUser(uuid);

    return {
        name: minecraftUser.name,
        uuid: minecraftUser.uuid,
        minecraftUser,
        webUser,
        liveUser
    }
}

export async function getUserByUsername(username): Promise<User> {
    const usernames = await getUserNames()
    const uuid = usernames[username]
    return await getUserByUUID(uuid);
}

export function isUserInLand(landName: string, user?: User): boolean {
    if (!user) return false;
    if (!user.minecraftUser.land) return false;

    return user.minecraftUser.land.name.toLowerCase() === landName.toLowerCase();
}
