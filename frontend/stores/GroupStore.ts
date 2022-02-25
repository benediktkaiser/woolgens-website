import {makeAutoObservable, runInAction} from "mobx";
import {getGroup} from "../core/auth";

class GroupStore {

    groups: Record<string, Group> = {}

    constructor() {
        makeAutoObservable(this)
    }

    async getGroup(groupName: string) {
        if (this.groups[groupName]) {
            return this.groups[groupName]
        }

        const group = await getGroup(groupName);
        runInAction(() => {
            this.groups[groupName] = group
        })
        return group
    }
}

const groupStore = new GroupStore()
export default groupStore
