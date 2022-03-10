import {makeAutoObservable, runInAction} from "mobx";
import {makePersistable} from "mobx-persist-store";

class TicketCategoryStore {

    categories: Record<string, TicketCategory> = {}
    statuses: Record<string, TicketStatus> = {}

    constructor() {
        makeAutoObservable(this)
        makePersistable(this, {
            name: "TicketCategoryStore",
            properties: ["categories", "statuses"],
        }).then(() => {
            return;
        });
    }

    /* Ticket Categories */
    fetchTicketCategories() {
        if (Object.values(this.categories).length === 0) {
            runInAction(() => {
                this.categories["test"] = {
                    id: "test",
                    name: "Test",
                    description: "<h1>Test Category</h1><p>This is a test category for our Ticket System</p>",
                    inputs: [],
                    active: false
                }
                this.categories["mod-apps"] = {
                    id: "mod-apps",
                    name: "Moderator Applications",
                    description: "<h1>Moderator Applications</h1><p>Here we would write the requirements for moderator</p>",
                    inputs: [],
                    active: true
                }
            })
        }
    }

    updateTicketCategory(ticketCategory: TicketCategory) {
        runInAction(() => {
            this.categories[ticketCategory.id] = ticketCategory
        })
        this.saveTicketCategory(ticketCategory)
    }

    saveTicketCategory(ticketCategory: TicketCategory) {
        console.info(`Saving Ticket Category "${ticketCategory.id}"`)
    }

    async deleteTicketCategoryById(ticketCategoryId: string) {
        runInAction(() => {
            delete this.categories[ticketCategoryId]
        })
        console.info(`Deleting Ticket Category "${ticketCategoryId}"`)
        return true;
    }

    /* Ticket Statuses */
    fetchTicketStatuses() {
        if (Object.values(this.statuses).length === 0) {
            runInAction(() => {
                this.statuses["in-progress"] = {
                    id: "in-progress",
                    label: "In Progress",
                    color: "#264cc4",
                    willClose: false,
                }
                this.statuses["closed"] = {
                    id: "closed",
                    label: "Closed",
                    color: "#910634",
                    willClose: true,
                }
            })
        }
    }

    updateTicketStatus(ticketStatus: TicketStatus) {
        runInAction(() => {
            this.statuses[ticketStatus.id] = ticketStatus
        })
        this.saveTicketStatus(ticketStatus)
    }

    saveTicketStatus(ticketStatus: TicketStatus) {
        console.info(`Saving Ticket Status "${ticketStatus.id}"`)
    }

    async deleteTicketStatusById(ticketStatusId: string) {
        runInAction(() => {
            delete this.statuses[ticketStatusId]
        })
        console.info(`Deleting Ticket Status "${ticketStatusId}"`)
        return true;
    }
}

const ticketCategoryStore = new TicketCategoryStore()
export default ticketCategoryStore
