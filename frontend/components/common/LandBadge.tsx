import {FC} from "react";

declare interface LandBadgeProps {
    name: string
}

const LandBadge: FC<LandBadgeProps> = ({name}) => {
    return (
        <span className="py-0.5 px-3 text-xs bg-green-700 hover:bg-green-600 rounded-lg cursor-pointer select-none">
            {name}
        </span>
    )
}

export default LandBadge
