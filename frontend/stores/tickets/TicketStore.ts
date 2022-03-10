import {makeAutoObservable, runInAction} from "mobx";
import {makePersistable} from "mobx-persist-store";

class TicketStore {

    temporaryTickets: Record<string, InitialTicket> = {}

    constructor() {
        makeAutoObservable(this)
        makePersistable(this, {
            name: "TicketStore",
            properties: ["temporaryTickets"],
        }).then(() => {
            return;
        });
    }

    setTemporaryTicket(categoryId: string, ticket: InitialTicket) {
        runInAction(() => {
            this.temporaryTickets[categoryId] = ticket
        })
    }
}

const ticketStore = new TicketStore()
export default ticketStore
