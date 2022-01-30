import {makeAutoObservable, runInAction} from "mobx";
import {getUsersSorted} from "../core/minecraftUser";
import {getLandsSorted} from "../core/land";

class TopListStore {

    simpleTopLists: Record<string, MinecraftUser[]> = {}
    simpleLandsTopList: Land[]
    topLists: Record<string, Record<string, MinecraftUser[]>> = undefined

    constructor() {
        makeAutoObservable(this, {}, {autoBind: true});
    }

    async getSimpleTopList(key: string, sorted: string) {
        if (this.simpleTopLists[key]) {
            return this.simpleTopLists[key]
        }

        const topList = await getUsersSorted(sorted, 0, 5)
        runInAction(() => {
            this.simpleTopLists[key] = topList
        })
        return topList
    }

    async getSimpleLandsTopList() {
        if (this.simpleLandsTopList) {
            return this.simpleLandsTopList
        }

        const topList = await getLandsSorted('bank.balance', 0, 10);
        runInAction(() => {
            this.simpleLandsTopList = topList
        })
        return topList
    }
}

const topListStore = new TopListStore()
export default topListStore
