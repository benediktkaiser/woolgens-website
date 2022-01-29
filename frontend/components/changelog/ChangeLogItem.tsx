import React, {FC} from "react";
import McText from 'mctext-react'

declare interface ChangeLogItemProps {
    changelog: ChangeLog
}

const ChangeLogItem: FC<ChangeLogItemProps> = ({changelog}) => {
    return (
        <div className="overflow-hidden rounded-lg">
            <div className="py-4 leading-3 text-center bg-gradient-to-l from-accent select-none to-accent-400/30 font-avenir">
                <h1 className="text-2xl font-bold">
                    {changelog.title !== "" ? `${changelog.title} [${changelog.id}]` : `Version ${changelog.id}`}
                </h1>
                <h4 className="text-gray-100/60">
                    By {changelog.author}
                </h4>
            </div>
            <div className="p-4 text-gray-300 bg-dark-light">
                {changelog.lines.map((content, index) => (
                    <p key={index}>
                        <McText prefix="&" style={{ fontFamily: "poppins" }}>
                            {content}
                        </McText>
                    </p>
                ))}
            </div>
        </div>
    )
}

export default ChangeLogItem
