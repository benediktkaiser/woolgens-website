import {makeAutoObservable} from "mobx";

class UserCompareStore {

    userOne: User = undefined
    userTwo: User = undefined

    constructor() {
        makeAutoObservable(this)
    }


}

const userCompareStore = new UserCompareStore();
export default userCompareStore;
