import React, {FC} from "react";

declare interface BasicCardProps {
    children?: React.ReactNode
    padding?: string,
}

const BasicCard: FC<BasicCardProps> = ({padding = "p-4", children}) => {
    return (
        <div className={`${padding} bg-dark-light/50 rounded-md shadow`}>
            {children}
        </div>
    )
}

export default BasicCard
