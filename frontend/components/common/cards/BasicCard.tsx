import React, {FC} from "react";

declare interface BasicCardProps {
    children?: React.ReactNode
    padding?: string,
    withTabs?: boolean
    width?: string
}

const BasicCard: FC<BasicCardProps> = ({padding = "p-4", withTabs, width, children}) => {
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
