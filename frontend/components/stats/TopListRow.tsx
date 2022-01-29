import {FC} from "react";
import Avatar from "../common/Avatar";
import {IoMdTrophy} from "react-icons/io"
import Link from "next/link"

declare interface TopListRowProps {
    minecraftUser: MinecraftUser,
    value: string | number,
    label?: string,
    place: number,
}

const TopListRow: FC<TopListRowProps> = ({minecraftUser, value, label, place}) => {
    return (
        <div className="p-1">
            <Link href={`/profile/${minecraftUser.name}`} passHref={true}>
                <a className="flex justify-between items-center p-3 hover:bg-dark rounded-xl cursor-pointer">
                    <div className="flex overflow-hidden items-center max-w-[65%]">
                        <div className="flex-none">
                            <Avatar player={minecraftUser.uuid} size={55}/>
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
                                {minecraftUser.name}
                            </h1>
                        </div>
                    </div>
                    <div className="grow"/>
                    <div className="flex items-center text-xl">
                    <span>
                        {value}
                    </span>
                        <span className="ml-1">
                        {label}
                    </span>
                    </div>
                </a>
            </Link>
        </div>
    )
}

export default TopListRow
