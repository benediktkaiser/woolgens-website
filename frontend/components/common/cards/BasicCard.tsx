import React from "react";

interface BasicCardProps {
    children?: React.ReactNode
    padding?: string,
    withTabs?: boolean
    width?: string
}

const BasicCard = ({padding = "p-4", withTabs, width, children}: BasicCardProps) => {
    if (withTabs) {
        return (
            <div className={`${padding} bg-dark-light/50 rounded-b-md rounded-tr-md shadow`}>
                {children}
            </div>
        )
    }

    return (
        <div className={`${padding} bg-dark-light/50 rounded-md shadow ${width}`}>
            {children}
        </div>
    )
}

export default BasicCard
