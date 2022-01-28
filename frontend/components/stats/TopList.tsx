import {FC} from "react";
import TopListRow from "./TopListRow";
import demoMinecraftUser from "../../data/DemoMinecraftUser";

declare interface TopListProps {
    background?: string,
    title: string
}

const TopList: FC<TopListProps> = ({background = "bg-gradient-to-r to-blue-500 from-cyan-500", title}) => {

    return (
        <div className="overflow-hidden rounded-lg">
            <div className={background}>
                <h1 className="py-3 text-4xl font-bold text-center select-none font-avenir">
                    {title}
                </h1>
            </div>
            <div className="bg-dark-light">
                <TopListRow
                    minecraftUser={demoMinecraftUser}
                    value={demoMinecraftUser.seasons["1"].balance}
                    label="$"
                />
                <TopListRow
                    minecraftUser={demoMinecraftUser}
                    value={demoMinecraftUser.seasons["1"].balance}
                    label="$"
                />
                <TopListRow
                    minecraftUser={demoMinecraftUser}
                    value={demoMinecraftUser.seasons["1"].balance}
                    label="$"
                />
                <TopListRow
                    minecraftUser={demoMinecraftUser}
                    value={demoMinecraftUser.seasons["1"].balance}
                    label="$"
                />
                <TopListRow
                    minecraftUser={demoMinecraftUser}
                    value={demoMinecraftUser.seasons["1"].balance}
                    label="$"
                />
            </div>
        </div>
    )
}

export default TopList
