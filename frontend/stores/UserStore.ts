import {makeAutoObservable, runInAction} from "mobx";
import {getMinecraftUser} from "../core/minecraftUser";

class UserStore {

    users: Record<string, FullUser> = {}

    constructor() {
        makeAutoObservable(this, {}, {autoBind: true});
    }

    async getUser(username) {
        if (this.users[username]) {
            return this.users[username];
        }

        const uuid = "6fc34392-2261-4c1b-be56-9b34e7b8d8f0"; // TODO: Get UUID FROM USERNAME
        const minecraftUser = await getMinecraftUser(uuid)
        //const webUser = await getWebUser(username)

        runInAction(() => {
            this.users[username] = {
                webUser: undefined,
                minecraftUser
            }
        })
        return {
            webUser: undefined,
            minecraftUser,
        }
    }
}

const userStore = new UserStore()
export default userStore
