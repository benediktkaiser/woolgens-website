import TimeLineElement from "./TimeLineElement";
import BasicCard from "../../../common/cards/BasicCard";
import {FC, useEffect, useState} from "react";
import Pagination from "../../../common/pagination/Pagination";
import PaginationWrapper from "../../../common/pagination/PaginationWrapper";
import {MdOutlineMoneyOffCsred} from "react-icons/md";

interface LandTransactionsProps {
    transactions: LandTransaction[]
}

const pagination = new Pagination({itemsPerPage: 5, showPagerNumbers: true, itemName: "transactions"})

const LandTransactions: FC<LandTransactionsProps> = ({transactions}) => {
    const [items, setItems] = useState<LandTransaction[]>([])

    useEffect(() => {
        pagination.setEntries(transactions, (items: LandTransaction[]) => {
            setItems(items)
        })
    }, [transactions])

    return (
        <BasicCard withTabs={true} padding="px-10 py-4">
            {transactions.length > 0 ? (
                <PaginationWrapper pagination={pagination}>
                    <ol className="relative border-l border-gray-700">
                        {items.map((transaction, index) => <TimeLineElement key={index} transaction={transaction}/>)}
                    </ol>
                    <hr className="border-gray-700" />
                </PaginationWrapper>
            ): (
                <div className="flex items-center my-10">
                    <MdOutlineMoneyOffCsred size="5rem" className="text-red-400" />
                    <div className="ml-2">
                        <h1 className="text-3xl">
                            No Transactions
                        </h1>
                        <h3 className="text-lg text-gray-400">
                            This land have not had any transactions yet.
                        </h3>
                    </div>
                </div>
            )}
        </BasicCard>
    )
}

export default LandTransactions
