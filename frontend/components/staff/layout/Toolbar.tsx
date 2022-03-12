import React from "react";

interface ToolbarProps {
    title: string
    pathName: string
    children?: React.ReactNode
}

const Toolbar = ({title, children}: ToolbarProps) => {

    return (
        <header className="mx-auto mt-4 lg:mt-8 mb-4 w-full">
            <div className="flex items-center mb-1">
                <div className="flex-grow">
                    <h1 className="text-2xl font-bold">
                        {title}
                    </h1>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </header>
    )
}

export default Toolbar
