import {getMinecraftUser} from "./minecraftUser";

export async function getUserByUUID(uuid: string): Promise<User> {
    const minecraftUser = await getMinecraftUser(uuid);
    const webUser = {
        name: minecraftUser.name,
        uuid: minecraftUser.uuid,
        group: "default",
        joined: 0,
        notifications: [],
    }

    return {
        name: minecraftUser.name,
        uuid: minecraftUser.uuid,
        minecraftUser,
        webUser
    }
}
