import React from "react";

declare interface PaginationProperties {
    itemsPerPage: number,
    showPagerNumbers: boolean
    itemName?: string
}

declare type PageEvent<Type> = (entity: Type) => void

class Pagination {

    config: PaginationProperties
    isLoading = true
    items: Array<unknown> = []
    currentPage = 1
    maxPages = 1
    updateEvent: PageEvent<Array<unknown>>

    constructor(config: PaginationProperties) {
        this.config = config
    }

    setEntries(items: Array<unknown>, callback: PageEvent<Array<unknown>>) {
        this.items = items;
        this.maxPages = Math.ceil(items.length / this.config.itemsPerPage)
        this.updateEvent = callback
        this.isLoading = false
        this.updateEntries()
    }

    setNewConfig(config: PaginationProperties) {
        this.config = config
        this.maxPages = Math.ceil(this.items.length / this.config.itemsPerPage)
        this.updateEntries()
    }

    nextPage() {
        if (this.canNextPage()) {
            this.currentPage = this.currentPage + 1
            this.updateEntries()
        }
    }

    prevPage() {
        if (this.canPrevPage()) {
            this.currentPage = this.currentPage - 1
            this.updateEntries()
        }
    }

    canNextPage() {
        const nextPage = this.currentPage + 1
        return nextPage <= this.maxPages;
    }

    canPrevPage() {
        const prePage = this.currentPage - 1
        return prePage >= 1;
    }

    updateEntries() {
        setTimeout(() => {
            const loadedEntries: Array<React.ReactNode> = this.currentPage == 1 ?
                this.loadEntries(0, this.config.itemsPerPage) :
                this.loadEntries(((this.currentPage - 1) * this.config.itemsPerPage), this.currentPage * this.config.itemsPerPage)

            this.updateEvent(loadedEntries)
            this.isLoading = false
        }, 200)
    }

    loadEntries(from: number, to: number) {
        const loadedEntries: Array<React.ReactNode> = []

        for (let i = from; i < to; i++) {
            if (this.items.length > i) {
                const entry = this.items[i]
                if (entry) {
                    loadedEntries.push(entry)
                }
            }
        }

        return loadedEntries
    }

    currentEntries() {
        const start = (this.currentPage - 1) * this.config.itemsPerPage + 1
        const end = this.currentPage * this.config.itemsPerPage

        return `Showing ${start} to ${end} of ${this.items.length} ${this.config.itemName || "entries"}`
    }
}

export default Pagination
