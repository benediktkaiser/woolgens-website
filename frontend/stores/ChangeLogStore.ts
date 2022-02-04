import {makeAutoObservable, runInAction} from "mobx";
import {getChangeLogs} from "../core/changelog";

class ChangeLogStore {

    changeLogs: Array<ChangeLog> = undefined

    constructor() {
        makeAutoObservable(this)
    }

    async fetchChangeLogs() {
        if (this.changeLogs) return;

        const changelogs = await getChangeLogs()
        runInAction(() => {
            this.changeLogs = changelogs.reverse()
        })
    }
}

const changeLogStore = new ChangeLogStore()
export default changeLogStore
