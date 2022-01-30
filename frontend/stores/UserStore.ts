import {makeAutoObservable, runInAction} from "mobx";
import {getMinecraftUser, getUserNames} from "../core/minecraftUser";

class UserStore {

    users: Record<string, FullUser> = {}
    usernames: Record<string, string> = undefined

    constructor() {
        makeAutoObservable(this, {}, {autoBind: true});
    }

    async getUser(username) {
        if (this.users[username]) {
            return this.users[username];
        }

        const uuid = await this.getUUIDFromUserName(username)
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

    async getUUIDFromUserName(username): Promise<string> {
        const usernames = await this.getAllUserNames()

        if (usernames[username]) {
            return usernames[username]
        }
        throw new Error(`Could not find a uuid for ${username}`)
    }

    async getAllUserNames() {
        if (this.usernames) {
            return this.usernames
        }
        const usernames = await getUserNames();
        runInAction(() => {
            this.usernames = usernames
        })
        return usernames
    }

    async getAllFormattedUserNames() {
        const usernames = await this.getAllUserNames()

        const results = []
        let num = 0
        Object.keys(usernames).map((result) => {
            results.push({
                id: num,
                name: result,
                type: "player"
            })
            num++
        })
        return results
    }
}

const userStore = new UserStore()
export default userStore
