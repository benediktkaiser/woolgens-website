import Avatar from "../common/Avatar";
import {IoMdTrophy} from "react-icons/io"
import Link from "next/link"

declare interface TopListRowProps {
    minecraftUser: MinecraftUser,
    value: string | number,
    label?: string,
    place: number,
}

const TopListRow = ({minecraftUser, value, label, place}: TopListRowProps) => {
    return (
        <div className="p-1">
            <Link href={`/members/${minecraftUser.name}`} passHref={true}>
                <a className="flex justify-between items-center p-3 hover:bg-dark rounded-xl cursor-pointer">
                    <div className="flex overflow-hidden flex-grow items-center">
                        <div className="flex-none">
                            <Avatar player={minecraftUser.uuid} size={50}/>
                        </div>
                        <div className="ml-3">
                            <h1 className="flex items-center mb-px text-xl">
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
