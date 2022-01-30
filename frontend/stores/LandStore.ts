import {makeAutoObservable, runInAction} from "mobx";
import {getLandByName, getLandNames} from "../core/land";

class LandStore {

    lands: Record<string, Land> = {}
    landNames: Record<string, string> = undefined

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

    async getAllLandNames() {
        if (!this.landNames) {
            const landNames = await getLandNames();
            runInAction(() => {
                this.landNames = landNames
            })
        }

        const results = []
        Object.keys(this.landNames).map((name, index) => {
            results.push({
                id: -index,
                name: name,
                type: "land"
            })
        })
        return results
    }
}

const landStore = new LandStore()
export default landStore
