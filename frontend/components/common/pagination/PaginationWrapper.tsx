import React, {FC} from "react";
import Pagination from "./Pagination";
import {BaseButton} from "../BaseButton";
import {BiLeftArrow, BiRightArrow} from "react-icons/bi";
import {AiOutlineLoading3Quarters} from "react-icons/ai"

declare interface PaginationProps {
    title?: string,
    pagination: Pagination
    children?: React.ReactNode,
}

const PaginationWrapper: FC<PaginationProps> = ({title, pagination, children}) => {

    if (pagination.isLoading) {
        return (
            <div className="flex justify-center items-center h-48">
                <div className="flex flex-col items-center space-y-2">
                    <AiOutlineLoading3Quarters size="2rem" className="animate-spin" />
                    <span className="text-2xl font-bold">
                    Loading data
                </span>
                </div>
            </div>
        )
    }

    return (
        <div>
            <header className="flex my-2">
                <h1 className="flex-grow text-2xl font-bold">
                    {title}
                </h1>
            </header>
            <main>
                {children}
            </main>
            <footer className="flex items-center mt-4">
                <div className="flex-grow text-gray-500">
                    {pagination.currentEntries()}
                </div>
                <div className="flex items-stretch space-x-3 text-sm">
                    <BaseButton type="dark" onClick={() => pagination.prevPage()} disabled={!pagination.canPrevPage()}>
                        <BiLeftArrow color="white"/>
                    </BaseButton>
                    {pagination.config.showPagerNumbers && (
                        <>
                            {pagination.canPrevPage() && (
                                <BaseButton type="dark" onClick={() => pagination.prevPage()}>
                                    {pagination.currentPage - 1}
                                </BaseButton>
                            )}
                            <BaseButton type="dark-light" className="bg-blue-500">
                                {pagination.currentPage}
                            </BaseButton>
                            {pagination.canNextPage() && (
                                <BaseButton type="dark" onClick={() => pagination.nextPage()}>
                                    {pagination.currentPage + 1}
                                </BaseButton>
                            )}
                        </>
                    )}
                    <BaseButton type="dark" onClick={() => pagination.nextPage()} disabled={!pagination.canNextPage()}>
                        <BiRightArrow color="white"/>
                    </BaseButton>
                </div>
            </footer>
        </div>
    )
}

export default PaginationWrapper
