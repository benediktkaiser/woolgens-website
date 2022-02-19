import {makeAutoObservable, runInAction} from "mobx";
import {getUserNames} from "../core/minecraftUser";
import {getLandNames} from "../core/land";

class AutoCompleteStore {

    userList: AutoCompleteListItem[] = []
    landList: AutoCompleteListItem[] = []

    constructor() {
        makeAutoObservable(this)
    }

    async fetchUserList() {
        if (this.userList.length > 0) return;

        const usernames = await getUserNames()
        const results: AutoCompleteListItem[] = []
        let num = 0
        Object.keys(usernames).map((result) => {
            results.push({
                id: num,
                name: result,
                type: "PLAYER"
            })
            num++
        })
        runInAction(() => {
            this.userList = results
        })
    }

    async fetchLandList() {
        if (this.landList.length > 0) return;

        const landNames = await getLandNames()
        const results: AutoCompleteListItem[] = []
        let num = 0
        Object.keys(landNames).map((result) => {
            results.push({
                id: num,
                name: result,
                type: "LAND"
            })
            num--
        })
        runInAction(() => {
            this.landList = results
        })
    }
}

const autoCompleteStore = new AutoCompleteStore()
export default autoCompleteStore
