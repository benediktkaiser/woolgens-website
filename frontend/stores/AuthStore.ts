import {makeAutoObservable, runInAction} from "mobx";
import {makePersistable, getPersistedStore,} from "mobx-persist-store";
import {getMinecraftUser} from "../core/minecraftUser";
import {changeAPIToken} from "../core/api";
import {basicAuth, tokenAuth} from "../core/auth";

class AuthStore {

    token = "";
    webUser: WebUser | undefined = undefined;
    minecraftUser: MinecraftUser | undefined = undefined;

    constructor() {
        makeAutoObservable(this, {}, {autoBind: true});

        makePersistable(this, {
            name: "AuthStore",
            properties: ["token"],
        }).then(() => {
            return;
        });
    }

    async getPersistedData(): Promise<void> {
        const data = await getPersistedStore(this);
        console.info(JSON.stringify(data));
    }

    async tokenAuth(token) {
        const webUser = await tokenAuth(token);
        if (!webUser) {
            runInAction(() => {
                this.token = ""
            })
            return;
        }

        const minecraftUser = await getMinecraftUser(webUser.uuid)
        changeAPIToken(token)
        runInAction(() => {
            this.webUser = webUser;
            this.minecraftUser = minecraftUser
        })
    }

    async basicAuth(username, password): Promise<boolean> {
        const data = await basicAuth(username, password)
        if (!data) {
            return false;
        }

        const minecraftUser = await getMinecraftUser(data.user.uuid)
        changeAPIToken(data.token)
        runInAction(() => {
            this.token = data.token;
            this.webUser = data.user;
            this.minecraftUser = minecraftUser
        })
        return true;
    }

    logout() {
        runInAction(() => {
            this.token = "";
            this.webUser = undefined;
            this.minecraftUser = undefined;
        })
    }
}

const authStore = new AuthStore()
export default authStore
