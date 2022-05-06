import {makeAutoObservable, runInAction} from "mobx";
import {
    createNewTicket,
    deleteTicketCategoryById,
    deleteTicketStatusById,
    fetchTicketCategories, fetchTickets,
    fetchTicketStatuses,
    getTicketCategoryById,
    getTicketStatusById,
    updateTicketCategory,
    updateTicketStatus
} from "../core/staff/tickets";
import {makePersistable} from "mobx-persist-store";

class TicketStore {

    categories: Record<string, TicketCategory> = {}
    statuses: Record<string, TicketStatus> = {}

    tickets: Record<string, Ticket> = {}
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

    async fetchTicketCategories(reFetch = false) {
        if (Object.values(this.categories).length === 0 || reFetch) {
            const ticketsArray = await fetchTicketCategories()
            ticketsArray.map(ticketCategory => {
                this.categories[ticketCategory.id] = ticketCategory
            })
        }
    }

    async getTicketCategoryById(ticketCategoryId: string) {
        if (this.categories[ticketCategoryId]) {
            return this.categories[ticketCategoryId]
        }
        const ticketCategory = await getTicketCategoryById(ticketCategoryId)
        runInAction(() => {
            this.categories[ticketCategoryId] = ticketCategory
        })
        return ticketCategory
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

    async getTicketStatusById(ticketStatusId: string) {
        if (this.statuses[ticketStatusId]) {
            return this.statuses[ticketStatusId]
        }
        const ticketStatus = await getTicketStatusById(ticketStatusId)
        runInAction(() => {
            this.statuses[ticketStatusId] = ticketStatus
        })
        return ticketStatus
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

    setTemporaryTicket(categoryId: string, ticket: InitialTicket) {
        runInAction(() => {
            this.temporaryTickets[categoryId] = ticket
        })
    }

    deleteTemporaryTicket(categoryId: string) {
        runInAction(() => {
            delete this.temporaryTickets[categoryId]
        })
    }

    async submitTicket(category: TicketCategory): Promise<string | undefined> {
        return await createNewTicket(category, this.temporaryTickets[category.id])
    }

    async fetchAllTickets() {
        const tickets = await fetchTickets()
        tickets.map(ticket => {
            this.tickets[ticket.id] = ticket
        })
    }
}

const ticketStore = new TicketStore()
export default ticketStore
