import {makeAutoObservable, runInAction} from "mobx";
import {getUserNames} from "../core/minecraftUser";
import {getUserByUUID} from "../core/user";

class UserStore {

    users: Record<string, User> = {}
    usernames: Record<string, string> = undefined

    constructor() {
        makeAutoObservable(this, {}, {autoBind: true});
    }

    async getUser(username): Promise<User> {
        if (this.users[username]) {
            return this.users[username];
        }

        const uuid = await this.getUUIDFromUserName(username)
        const user = await getUserByUUID(uuid);

        runInAction(() => {
            this.users[username] = user
        })
        return user
    }

    async getUUIDFromUserName(username): Promise<string> {
        if (!this.usernames) {
            await runInAction(async () => {
                this.usernames = await this.getAllUserNames()
            })
        }

        if (this.usernames[username]) {
            return this.usernames[username]
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
        if (!this.usernames) {
            await runInAction(async () => {
                this.usernames = await this.getAllUserNames()
            })
        }

        const results = []
        let num = 0
        Object.keys(this.usernames).map((result) => {
            results.push({
                id: num,
                name: result,
                type: "player"
            })
            num++
        })
        return results
    }

    isUserInLand(landName: string, user?: User): boolean {
        if (!user) return false;
        if (!user.minecraftUser.land) return false;

        return user.minecraftUser.land.name.toLowerCase() === landName.toLowerCase();
    }
}

const userStore = new UserStore()
export default userStore
