import {FC} from "react";
import Avatar from "../common/Avatar";
import LandBadge from "../common/LandBadge";

declare interface TopListRowProps {
    minecraftUser: MinecraftUser,
    value: string | number,
    label: string,
}

const TopListRow: FC<TopListRowProps> = ({ minecraftUser, value, label }) => {
    return (
        <div className="flex justify-between items-center p-4">
            <div className="flex items-center">
                <Avatar player={minecraftUser.uuid} size={55} />
                <div className="ml-4">
                    <h1 className="mb-px text-2xl">{minecraftUser.name}</h1>
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
    )
}

export default TopListRow
