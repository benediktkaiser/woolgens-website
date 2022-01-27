import React, {FC} from "react";

declare interface AnnouncementProps {
    text: string,
    icon: React.ReactNode,
    iconStyles: string,
    rightComponent?: React.ReactNode
}

const Announcement: FC<AnnouncementProps> = ({text, iconStyles, rightComponent, icon}) => {
    return (
        <div className="flex justify-between items-center p-3 w-full rounded-xl shadow bg-dark-light/50">
            <div className="flex items-center">
                <div className={`p-3 text-2xl rounded-xl ${iconStyles}`}>
                    {icon}
                </div>
                <p className="ml-3">
                    {text}
                </p>
            </div>
            {rightComponent}
        </div>
    )
}

export default Announcement
