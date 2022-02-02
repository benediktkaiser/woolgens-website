import {makeAutoObservable, runInAction} from "mobx";
import {getChangeLogs} from "../core/changelog";

class ChangeLogStore {

    changeLogs: Array<ChangeLog> = undefined

    constructor() {
        makeAutoObservable(this)
    }

    async getChangeLogs(): Promise<ChangeLog[]> {
        if (this.changeLogs) {
            return this.changeLogs
        }

        const changelogs = await getChangeLogs()
        runInAction(() => {
            this.changeLogs = changelogs.reverse()
        })
        return this.changeLogs
    }
}

const changeLogStore = new ChangeLogStore()
export default changeLogStore
