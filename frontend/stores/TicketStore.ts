import {makeAutoObservable, runInAction} from "mobx";
import {
    deleteTicketCategoryById, deleteTicketStatusById,
    fetchTicketCategories,
    fetchTicketStatuses,
    updateTicketCategory, updateTicketStatus
} from "../core/staff/tickets";

class TicketStore {

    categories: Record<string, TicketCategory> = {}
    statuses: Record<string, TicketStatus> = {}

    constructor() {
        makeAutoObservable(this)
    }

    async fetchTicketCategories(reFetch = false) {
        if (Object.values(this.categories).length === 0 || reFetch) {
            const ticketsArray = await fetchTicketCategories()
            ticketsArray.map(ticketCategory => {
                this.categories[ticketCategory.id] = ticketCategory
            })
        }
    }

    async updateTicketCategory(ticketCategory: TicketCategory) {
        runInAction(() => {
            this.categories[ticketCategory.id] = ticketCategory
        })
        await this.saveTicketCategory(ticketCategory)
    }

    async saveTicketCategory(ticketCategory: TicketCategory) {
        return await updateTicketCategory(ticketCategory)
    }

    async deleteTicketCategoryById(ticketCategoryId: string) {
        await deleteTicketCategoryById(ticketCategoryId)
        runInAction(() => {
            delete this.categories[ticketCategoryId]
        })
        return true;
    }

    async fetchTicketStatuses(reFetch = false) {
        if (Object.values(this.statuses).length === 0 || reFetch) {
            const ticketStatuses = await fetchTicketStatuses()
            ticketStatuses.map(ticketStatus => {
                this.statuses[ticketStatus.id] = ticketStatus
            })
        }
    }

    async updateTicketStatus(ticketStatus: TicketStatus) {
        runInAction(() => {
            this.statuses[ticketStatus.id] = ticketStatus
        })
        await this.saveTicketStatus(ticketStatus)
    }

    async saveTicketStatus(ticketStatus: TicketStatus) {
        return await updateTicketStatus(ticketStatus)
    }

    async deleteTicketStatusById(ticketStatusId: string) {
        await deleteTicketStatusById(ticketStatusId)
        runInAction(() => {
            delete this.statuses[ticketStatusId]
        })
        return true;
    }
}

const ticketStore = new TicketStore()
export default ticketStore
