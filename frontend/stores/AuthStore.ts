import {makeAutoObservable, runInAction} from "mobx";
import {makePersistable} from "mobx-persist-store";
import {changeAPIToken} from "../core/api";
import {authenticateWithToken, authenticateWithUserNameAndPassword} from "../core/auth";
import {getMinecraftUser} from "../core/user/minecraftUser";
import {toast} from "react-toastify";

class AuthStore {

    token = undefined;
    user: User = undefined;
    loginModalOpen = false;
    registerModalOpen = false;
    loading = true;

    constructor() {
        makeAutoObservable(this, {}, {autoBind: true});

        makePersistable(this, {
            name: "AuthStore",
            properties: ["token"],
        }).then(() => {
            return;
        });
    }

    async tokenAuth(token): Promise<boolean> {
        runInAction(() => {
            this.loading = true;
        })
        const webUser = await authenticateWithToken(token);
        if (!webUser) {
            runInAction(() => {
                this.token = undefined
                this.loading = false
            })
            throw new Error("Your Token was expired!")
        }
        const minecraftUser = await getMinecraftUser(webUser.uuid)

        // Set new Data
        await changeAPIToken(token)
        this.setUser(minecraftUser, webUser)
        return true;
    }

    async basicAuth(username, password): Promise<boolean> {
        const data = await authenticateWithUserNameAndPassword(username, password)
        if (!data) {
            return false;
        }

        const minecraftUser = await getMinecraftUser(data.user.uuid)
        await changeAPIToken(data.token)
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

    setLoading(value: boolean) {
        runInAction(() => {
            this.loading = value
        })
    }

    logout() {
        runInAction(() => {
            this.token = "";
            this.user = undefined;
        })
        toast.error("You were logged out. You can now close the browser session.")
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
        if (!this.user) return false;
        if (permission === "staff") return this.user.webUser.group.isStaff;
        if (this.user.webUser.group.permissions.includes('web.*')) return true;
        return this.user.webUser.group.permissions.includes(permission);
    }
}

const authStore = new AuthStore()
export default authStore
