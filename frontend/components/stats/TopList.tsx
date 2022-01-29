import React, {FC} from "react";
import TopListRow from "./TopListRow";

declare interface TopListProps {
    background?: string,
    title: string
    children?: React.ReactNode
}

const TopList: FC<TopListProps> = ({background = "bg-gradient-to-r to-blue-500 from-cyan-500", title, children}) => {

    return (
        <div className="overflow-hidden rounded-lg">
            <div className={background}>
                <h1 className="py-3 text-4xl font-bold text-center select-none font-avenir">
                    {title}
                </h1>
            </div>
            <div className="py-2 bg-dark-light">
                {children}
            </div>
        </div>
    )
}

export default TopList
