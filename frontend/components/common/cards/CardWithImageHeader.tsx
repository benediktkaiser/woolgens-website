import React from "react";
import BasicCard from "./BasicCard";

interface CardWithImageHeaderProps {
    top?: React.ReactNode,
    children?: React.ReactNode
}

const CardWithImageHeader = ({top, children}: CardWithImageHeaderProps) => {
    return (
        <BasicCard padding="p-0 border-b-8 border-dark-light">
            {top}
            <div className="p-4">
                {children}
            </div>
        </BasicCard>
    )
}

export default CardWithImageHeader
