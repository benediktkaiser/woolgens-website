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
            <div className="py-2 bg-dark-light">
                <TopListRow
                    minecraftUser={demoMinecraftUser}
                    value={demoMinecraftUser.seasons["1"].balance}
                    label="$"
                    place={1}
                />
                <TopListRow
                    minecraftUser={demoMinecraftUser}
                    value={demoMinecraftUser.seasons["1"].balance}
                    label="$"
                    place={2}
                />
                <TopListRow
                    minecraftUser={demoMinecraftUser}
                    value={demoMinecraftUser.seasons["1"].balance}
                    label="$"
                    place={3}
                />
                <TopListRow
                    minecraftUser={demoMinecraftUser}
                    value={demoMinecraftUser.seasons["1"].balance}
                    label="$"
                    place={4}
                />
                <TopListRow
                    minecraftUser={demoMinecraftUser}
                    value={demoMinecraftUser.seasons["1"].balance}
                    label="$"
                    place={5}
                />
            </div>
        </div>
    )
}

export default TopList
