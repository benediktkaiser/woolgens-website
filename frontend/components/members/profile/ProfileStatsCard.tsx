import React from "react";

interface ProfileStatsCardProps {
    icon: React.ReactNode,
    title: string,
    value: string
}

const ProfileStatsCard = ({icon, title, value}: ProfileStatsCardProps) => {
    return (
        <div className="group p-3 w-full leading-3 text-center rounded-xl">
            <div className="pt-2 mx-auto w-min text-gray-200">
                {icon}
            </div>
            <h1 className="mt-2 text-2xl font-semibold">
                {title}
            </h1>
            <h2>
                {value}
            </h2>
        </div>
    )
}

export default ProfileStatsCard
