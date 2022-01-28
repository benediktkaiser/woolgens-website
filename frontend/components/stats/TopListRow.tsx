import {FC} from "react";
import Avatar from "../common/Avatar";
import LandBadge from "../common/LandBadge";
import {IoMdTrophy} from "react-icons/io"

declare interface TopListRowProps {
    minecraftUser: MinecraftUser,
    value: string | number,
    label: string,
    place: number,
}

const TopListRow: FC<TopListRowProps> = ({ minecraftUser, value, label, place }) => {
    return (
        <div className="p-1">
            <div className="flex justify-between items-center p-3 hover:bg-dark rounded-xl cursor-pointer">
                <div className="flex items-center">
                    <Avatar player={minecraftUser.uuid} size={55} />
                    <div className="ml-4">
                        <h1 className="flex items-center mb-px text-2xl">
                            {place === 1 && (
                                <IoMdTrophy className="mr-1 text-amber-400" />
                            )}
                            {place === 2 && (
                                <IoMdTrophy className="mr-1 text-gray-400" />
                            )}
                            {place === 3 && (
                                <IoMdTrophy className="mr-1 text-yellow-700" />
                            )}
                            {minecraftUser.name}
                        </h1>
                        <LandBadge name={minecraftUser.land.name} />
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
            </div>
        </div>
    )
}

export default TopListRow
