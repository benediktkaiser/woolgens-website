import {ticketAPI} from "../api";

export async function fetchTicketCategories(): Promise<TicketCategory[]> {
    try {
        const data = await ticketAPI.get('/categories')
        return data.data
    } catch (error) {
        console.error(`Error fetching Ticket Categories: ${error}`)
        return []
    }
}

export async function getTicketCategoryById(categoryId: string): Promise<TicketCategory> {
    try {
        const data = await ticketAPI.get(`/categories/${categoryId}`)
        return data.data
    } catch (error) {
        console.error(`Could not find Ticket Category ${categoryId}`)
        return undefined
    }
}

export async function updateTicketCategory(category: TicketCategory): Promise<boolean> {
    try {
        await ticketAPI.put('/categories', category)
        return true;
    } catch (error) {
        console.error(`Error updating category ${category.id}: ${error}`)
        return false;
    }
}

export async function deleteTicketCategoryById(ticketCategoryId: string): Promise<boolean> {
    try {
        await ticketAPI.delete(`/categories/${ticketCategoryId}`)
        return true;
    } catch (error) {
        console.error(`Error deleting category ${ticketCategoryId}: ${error}`)
        return false;
    }
}

export async function fetchTicketStatuses(): Promise<TicketStatus[]> {
    try {
        const data = await ticketAPI.get('/status')
        return data.data
    } catch (error) {
        console.error(`Error fetching Ticket Statuses: ${error}`)
        return []
    }
}

export async function getTicketStatusById(statusId: string): Promise<TicketStatus> {
    try {
        const data = await ticketAPI.get(`/status/${statusId}`)
        return data.data
    } catch (error) {
        console.error(`Could not find Ticket Status ${statusId}`)
        return undefined
    }
}

export async function updateTicketStatus(status: TicketStatus): Promise<boolean> {
    try {
        await ticketAPI.put('/status', status)
        return true;
    } catch (error) {
        console.error(`Error updating status ${status.id}: ${error}`)
        return false;
    }
}

export async function deleteTicketStatusById(ticketStatusId: string): Promise<boolean> {
    try {
        await ticketAPI.delete(`/status/${ticketStatusId}`)
        return true;
    } catch (error) {
        console.error(`Error deleting status ${ticketStatusId}: ${error}`)
        return false;
    }
}

export async function fetchTickets(): Promise<Ticket[]> {
    try {
        const tickets = await ticketAPI.get(`/tickets`)
        return tickets.data
    }
    catch (error) {
        console.error(error)
        return []
    }
}

export async function createNewTicket(category: TicketCategory, initialTicket: InitialTicket): Promise<string> {
    try {
        const ticket: Ticket = {
            timestamp: Date.now(),
            id: `${initialTicket.issuer.name}-${category.id}-${Date.now().toString().slice(-4)}`,
            assignee: [],
            entries: [],
            status: undefined,
            open: true,
            ...initialTicket,
        }
        await ticketAPI.put(`/tickets`, ticket)
        return ticket.id
    } catch (error) {
        console.error(error)
        return undefined
    }
}

