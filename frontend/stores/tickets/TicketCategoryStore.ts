import {makeAutoObservable, runInAction} from "mobx";
import {makePersistable} from "mobx-persist-store";

class TicketCategoryStore {

    categories: Record<string, TicketCategory> = {}

    constructor() {
        makeAutoObservable(this)
        makePersistable(this, {
            name: "TicketCategoryStore",
            properties: ["categories"],
        }).then(() => {
            return;
        });
    }

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
}

const ticketCategoryStore = new TicketCategoryStore()
export default ticketCategoryStore
