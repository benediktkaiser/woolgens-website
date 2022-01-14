import {makeAutoObservable, runInAction} from "mobx";
import {makePersistable, getPersistedStore,} from "mobx-persist-store";
import {basicAuth, tokenAuth} from "../core/auth";
import {changeAPIToken} from "../core/api";
import {getMinecraftUser} from "../core/minecraftUser";

class AuthStore {

    token: string | null;
    webUser: WebUser;
    minecraftUser: MinecraftUser;

    constructor() {
        makeAutoObservable(this, {}, {autoBind: true});

        makePersistable(this, {
            name: "PersistentStore",
            properties: ["token"],
        }).then(() => {
            return;
        });
    }

    async getPersistedData(): Promise<void> {
        const data = await getPersistedStore(this);
        console.info(JSON.stringify(data));
    }

    async tokenAuth(token: string) {
        const webUser = await tokenAuth(token);
        const minecraftUser = await getMinecraftUser(webUser.uuid)
        changeAPIToken(token)
        runInAction(() => {
            this.webUser = webUser
            this.minecraftUser = minecraftUser
        })
    }

    async basicAuth (username: string, password: string) {
        const data = await basicAuth(username, password)
        const minecraftUser = await getMinecraftUser(data.user.uuid)
        changeAPIToken(data.token)
        runInAction(() => {
            this.token = data.token;
            this.webUser = data.user;
            this.minecraftUser = minecraftUser
        })
    }
}

const authStore = new AuthStore()
export default authStore
