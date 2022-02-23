import {makeAutoObservable, runInAction} from "mobx";
import {makePersistable} from "mobx-persist-store";
import {getMinecraftUser} from "../core/minecraftUser";
import {changeAPIToken} from "../core/api";
import {basicAuth, tokenAuth} from "../core/auth";

class AuthStore {

    token = "";
    user: User = undefined;
    loginModalOpen = false;
    registerModalOpen = false;
    loading = false;

    constructor() {
        makeAutoObservable(this, {}, {autoBind: true});

        makePersistable(this, {
            name: "AuthStore",
            properties: ["token"],
        }).then(() => {
            return;
        });
    }

    async tokenAuth(token) {
        runInAction(() => {
            this.loading = true;
        })
        const webUser = await tokenAuth(token);
        if (!webUser) {
            runInAction(() => {
                this.token = ""
            })
            return;
        }
        const minecraftUser = await getMinecraftUser(webUser.uuid)

        // Set new Data
        this.setUser(minecraftUser, webUser)
        changeAPIToken(token)
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
        })
        this.setUser(minecraftUser, data.user)
        return true;
    }

    setUser(minecraftUser: MinecraftUser, webUser: WebUser) {
        runInAction(() => {
            this.user = {
                name: minecraftUser.name,
                uuid: minecraftUser.uuid,
                minecraftUser: minecraftUser,
                webUser: webUser
            }
            this.loading = false
        })
    }

    logout() {
        runInAction(() => {
            this.token = "";
            this.user = undefined;
        })
    }

    toggleLoginModal() {
        runInAction(() => {
            this.loginModalOpen = !this.loginModalOpen;
        })
    }

    toggleRegisterModal() {
        runInAction(() => {
            this.registerModalOpen = !this.registerModalOpen;
        })
    }

    closeLoginModal() {
        runInAction(() => {
            this.loginModalOpen = false
        })
    }

    hasPermission(permission: string): boolean {
        if (!this.user.webUser) return false;
        if (this.user.webUser.group.permissions.includes('web.*')) return true;
        return this.user.webUser.group.permissions.includes(permission);
    }
}

const authStore = new AuthStore()
export default authStore
