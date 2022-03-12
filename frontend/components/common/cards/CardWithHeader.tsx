import React from "react";
import BasicCard from "./BasicCard";

interface CardWithHeaderProps {
    title: string,
    right?: React.ReactNode,
    children?: React.ReactNode
}

const CardWithHeader = ({title, right, children}: CardWithHeaderProps) => {
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
