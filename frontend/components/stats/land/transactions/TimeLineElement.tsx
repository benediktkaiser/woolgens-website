import {FC} from "react";
import {AiOutlinePlus, AiOutlineMinus, AiOutlineArrowUp} from "react-icons/ai";
import Avatar from "../../../common/Avatar";
import {formatMoney} from "../../../../core/formatters";
import Link from "next/link"

interface TimeLineElement {
    transaction: LandTransaction;
}

const TimeLineElement: FC<TimeLineElement> = ({transaction}) => {
    return (
        <li className="mb-10 ml-7">
            {transaction.type == "DEPOSIT" && (
                <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-green-600 rounded-full ring-4 ring-green-900/40">
                    <AiOutlinePlus />
                </span>
            )}
            {transaction.type == "WITHDRAW" && (
                <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-red-600 rounded-full ring-4 ring-red-900/40">
                    <AiOutlineMinus />
                </span>
            )}
            {transaction.type == "BUY_UPGRADE" && (
                <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-600 rounded-full ring-4 ring-blue-900/40">
                    <AiOutlineArrowUp />
                </span>
            )}
            <div className="flex gap-3 items-center">
                <Avatar player={transaction.issuer} size={30} />
                <Link href={`/profile/${transaction.issuer}`} passHref={true}>
                    <a className="text-2xl font-semibold text-gray-100 hover:text-accent-200">{transaction.issuer}</a>
                </Link>
            </div>
            <div className="mt-1.5">
                <time className="block mb-2 text-sm font-normal text-gray-500">
                    {transaction.type == "DEPOSIT" && "Deposited"}
                    {transaction.type == "WITHDRAW" && "Withdrew"}
                    {transaction.type == "BUY_UPGRADE" && "Bought an Upgrade for"}
                    <span className="mx-1 font-bold text-accent-400">
                        {formatMoney(transaction.amount)}$
                    </span>
                    on {new Date(transaction.timestamp).toDateString()}
                </time>
            </div>
        </li>
    )
}

export default TimeLineElement
