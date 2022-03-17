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
