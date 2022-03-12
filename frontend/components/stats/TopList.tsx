import React from "react";

declare interface TopListProps {
    background?: string,
    title: string
    children?: React.ReactNode
}

const TopList = ({background = "bg-gradient-to-r to-blue-500 from-cyan-500", title, children}: TopListProps) => {

    return (
        <div className="overflow-hidden rounded-lg">
            <div className={background}>
                <h1 className="py-3 text-4xl font-bold text-center select-none">
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
