import React from "react";

const OverflowScrollbar = ({ children, maxHeight }: {children: React.ReactNode, maxHeight: string}) => {
    return (
        <div className={`overflow-auto scrollbar scrollbar-thin scrollbar-thumb-accent-500 scrollbar-track-dark-light scrollbar-thumb-rounded pr-3 ${maxHeight}`}>
            {children}
        </div>
    )
}

export default OverflowScrollbar
