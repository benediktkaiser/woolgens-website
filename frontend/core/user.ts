import {getMinecraftUser} from "./minecraftUser";
import {getWebUser} from "./auth";

export async function getUserByUUID(uuid: string): Promise<User> {
    const minecraftUser = await getMinecraftUser(uuid);
    const webUser = await getWebUser(uuid);

    return {
        name: minecraftUser.name,
        uuid: minecraftUser.uuid,
        minecraftUser,
        webUser
    }
}
