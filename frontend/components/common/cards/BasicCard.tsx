import React, {FC} from "react";

declare interface BasicCardProps {
    children?: React.ReactNode
    padding?: string,
    withTabs?: boolean
}

const BasicCard: FC<BasicCardProps> = ({padding = "p-4", withTabs, children}) => {
    if (withTabs) {
        return (
            <div className={`${padding} bg-dark-light/50 rounded-b-md shadow`}>
                {children}
            </div>
        )
    }

    return (
        <div className={`${padding} bg-dark-light/50 rounded-md shadow`}>
            {children}
        </div>
    )
}

export default BasicCard
