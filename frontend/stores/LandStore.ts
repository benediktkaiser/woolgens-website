import {makeAutoObservable, runInAction} from "mobx";
import {getLandByName} from "../core/land";

class LandStore {

    lands: Record<string, Land> = {}

    constructor() {
        makeAutoObservable(this, {}, {autoBind: true});
    }

    async getLand(name) {
        if (this.lands[name]) {
            return this.lands[name];
        }

        const land = await getLandByName(name)

        runInAction(() => {
            this.lands[name] = land
        })
        return land
    }
}

const landStore = new LandStore()
export default landStore
