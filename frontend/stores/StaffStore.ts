import {makeAutoObservable, runInAction} from "mobx";

class StaffStore {

    sidebarExtended = false

    constructor() {
        makeAutoObservable(this, {}, {autoBind: true});
    }

    toggleSidebar() {
        runInAction(() => {
            this.sidebarExtended = !this.sidebarExtended
        })
    }
}

const staffStore = new StaffStore()
export default staffStore
