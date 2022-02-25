import BasicCard from "./BasicCard";
import React, {FC} from "react";

declare interface CardWithHeaderProps {
    top?: React.ReactNode,
    children?: React.ReactNode
}

const CardWithImageHeader: FC<CardWithHeaderProps> = ({top, children}) => {
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
