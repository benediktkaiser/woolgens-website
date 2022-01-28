import BasicCard from "./BasicCard";
import React, {FC} from "react";

declare interface CardWithHeaderProps {
    title: string,
    right?: React.ReactNode,
    children?: React.ReactNode
}

const CardWithHeader: FC<CardWithHeaderProps> = ({title, right, children}) => {
    return (
        <BasicCard padding="p-0">
            <div className="flex justify-between items-center py-2 px-4 bg-dark-light rounded-t-md">
                <h1 className="text-xl">
                    {title}
                </h1>
                {right}
            </div>
            <div className="p-4">
                {children}
            </div>
        </BasicCard>
    )
}

export default CardWithHeader
