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

        const uuid = "b2d820fe-3777-4a00-a792-f0d91a33c7b7"; // TODO: Get UUID FROM USERNAME
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
