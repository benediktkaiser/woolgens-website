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
            <div className="flex justify-between items-center p-4 rounded-t-md bg-gray-700/80">
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
