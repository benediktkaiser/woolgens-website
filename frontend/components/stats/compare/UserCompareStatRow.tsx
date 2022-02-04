import React, {FC} from "react";

interface UserCompareStatRowProps {
    title: string
    icon?: React.ReactNode
    value?: string | number;
    label?: string
}

const UserCompareStatRow: FC<UserCompareStatRowProps> = ({ title, icon, value, label }) => {
    return (
        <div className="flex justify-between items-center text-xl">
            <div className="flex items-center text-gray-400">
                <span className="p-3 mr-3 text-3xl bg-dark rounded-xl">
                    {icon}
                </span>
                {title}
            </div>
            <div className="text-gray-300">
                {value ? (
                    <div>
                        {value}
                        <span className="ml-2">
                            {label}
                        </span>
                    </div>
                ): "-"}
            </div>
        </div>
    )
}

export default UserCompareStatRow
