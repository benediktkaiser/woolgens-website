import {FC} from "react";
import Avatar from "../common/Avatar";
import {IoMdTrophy} from "react-icons/io"
import Link from "next/link"
import {formatMoney} from "../../core/formatters";

declare interface LandTopListRowProps {
    land: Land,
    place: number,
}

const LandTopListRow: FC<LandTopListRowProps> = ({land, place}) => {
    return (
        <div className="p-1">
            <Link href={`/stats/lands/${land.id}`} passHref={true}>
                <a className="flex justify-between items-center p-3 hover:bg-dark rounded-xl cursor-pointer">
                    <div className="flex overflow-hidden items-center max-w-[65%]">
                        <div className="hidden md:block mr-3 text-2xl font-semibold text-gray-400">
                            # {place}
                        </div>
                        <div className="flex-none">
                            <Avatar player={land.owner.uuid} size={55}/>
                        </div>
                        <div className="ml-4">
                            <h1 className="flex items-center mb-px text-2xl">
                                {place === 1 && (
                                    <IoMdTrophy className="mr-1 text-amber-400"/>
                                )}
                                {place === 2 && (
                                    <IoMdTrophy className="mr-1 text-gray-300"/>
                                )}
                                {place === 3 && (
                                    <IoMdTrophy className="mr-1 text-yellow-700"/>
                                )}
                                {land.name}
                            </h1>
                        </div>
                    </div>
                    <div className="grow"/>
                    <div className="flex items-center text-xl">
                        <span>
                            {formatMoney(land.bank.balance)} $
                        </span>
                    </div>
                </a>
            </Link>
        </div>
    )
}

export default LandTopListRow
