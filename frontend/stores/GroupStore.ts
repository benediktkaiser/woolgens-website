import {makeAutoObservable} from "mobx";
import {getGroup} from "../core/auth";

class GroupStore {
    groups: Record<string, Group> = {}

    constructor() {
        makeAutoObservable(this)
    }

    async getGroup(id: string) {
        if (this.groups[id]) {
            return this.groups[id]
        }

        return await getGroup(id);
    }
}

const groupStore = new GroupStore()
export default groupStore
