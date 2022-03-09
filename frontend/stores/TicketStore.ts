import {makeAutoObservable} from "mobx";

class TicketStore {

    ticketCategories: TicketCategory[] = [
        {
            id: "test",
            name: "Test",
            description: "<h1>Test Category</h1><p>This is a test category for our Ticket System</p>",
            inputs: {},
            active: false
        },
        {
            id: "mod-apps",
            name: "Moderator Applications",
            description: "<h1>Moderator Applications</h1><p>Here we would write the requirements for moderator</p>",
            inputs: {},
            active: true
        }
    ]

    constructor() {
        makeAutoObservable(this)
    }
}

const ticketStore = new TicketStore()
export default ticketStore
