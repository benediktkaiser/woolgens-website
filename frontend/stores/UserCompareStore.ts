import {makeAutoObservable, runInAction} from "mobx";

class UserCompareStore {

    modalOpen = false
    userOne: User = undefined
    userTwo: User = undefined

    constructor() {
        makeAutoObservable(this)
    }

    toggleModal() {
        runInAction(() => {
            this.modalOpen = !this.modalOpen
        })
        this.userOne && runInAction(() => {
            this.userOne = undefined
            this.userTwo = undefined
        })
    }

    openModal(userOne?, userTwo?) {
        userOne && runInAction(() => {
            this.userOne = userOne
        })
        userTwo && runInAction(() => {
            this.userTwo = userTwo
        })

        runInAction(() => {
            this.modalOpen = true
        })
    }

    setUserTwo(userTwo) {
        runInAction(() => {
            this.userTwo = userTwo
        })
    }
}

const userCompareStore = new UserCompareStore();
export default userCompareStore;
