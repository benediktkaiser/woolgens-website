import TimeLineElement from "./TimeLineElement";
import BasicCard from "../../../common/cards/BasicCard";
import {FC, useEffect, useState} from "react";
import Pagination from "../../../common/pagination/Pagination";
import PaginationWrapper from "../../../common/pagination/PaginationWrapper";
import {MdOutlineMoneyOffCsred, MdLockOutline} from "react-icons/md";
import authStore from "../../../../stores/AuthStore";
import {BaseButton} from "../../../common/BaseButton";

interface LandTransactionsProps {
    transactions: LandTransaction[],
    isUserAuth: boolean
}

const pagination = new Pagination({itemsPerPage: 5, showPagerNumbers: true, itemName: "transactions"})

const LandTransactions: FC<LandTransactionsProps> = ({transactions, isUserAuth = false}) => {
    const [items, setItems] = useState<LandTransaction[]>([])

    useEffect(() => {
        pagination.setEntries(transactions, (items: LandTransaction[]) => {
            setItems(items)
        })
    }, [transactions])

    if (!isUserAuth || !authStore.user) {
        return (
            <BasicCard withTabs={true} padding="px-10 py-4">
                <div className="my-10 ml-4">
                    {!authStore.user ? (
                        <div>
                            <h1 className="text-3xl">
                                Please login
                            </h1>
                            <h3 className="text-gray-400">
                                You must be logged in to see your land transaction history.
                            </h3>
                            <BaseButton onClick={() => authStore.toggleLoginModal()} type="primary" className="mt-3">
                                Login
                            </BaseButton>
                        </div>
                    ): (
                        <div className="flex items-center my-10">
                            <MdLockOutline size="5rem" className="text-red-400"/>
                            <div className="ml-2">
                                <h1 className="text-3xl">
                                    No permissions
                                </h1>
                                <h3 className="text-lg text-gray-400">
                                    This lands transactions are private! Please ask the land owner for access.
                                </h3>
                            </div>
                        </div>
                    )}
                </div>
            </BasicCard>
        )
    }

    return (
        <BasicCard withTabs={true} padding="px-10 py-4">
            {transactions.length > 0 ? (
                <PaginationWrapper pagination={pagination}>
                    <ol className="relative border-l border-gray-700">
                        {items.map((transaction, index) => <TimeLineElement key={index} transaction={transaction}/>)}
                    </ol>
                    <hr className="border-gray-700"/>
                </PaginationWrapper>
            ) : (
                <div className="flex items-center my-10">
                    <MdOutlineMoneyOffCsred size="5rem" className="text-red-400"/>
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
