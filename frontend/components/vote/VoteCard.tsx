import React, {FC} from "react";
import styles from "../../styles/modules/minecraftButton.module.css";

declare interface VoteCardProps {
    voted?: boolean
}

const VoteCard: FC<VoteCardProps> = ({voted}) => {
    return (
        <div className={`p-4 rounded border-l-4 ${voted ? "border-green-400" : "border-red-600"} bg-dark-light/30 hover:bg-dark-light/60 transition`}>
            <h1 className="text-2xl font-bold text-purple-300">
                VOTE SITE NAME
            </h1>
            <h2 className="text-gray-400">
                Vote for us on Site Name and earn some awesome in game rewards! You can vote every 24 hours
            </h2>

            <button className={`${styles.mcButton} mt-2 text-lg uppercase font-minecraft`}>
                visit vote site
            </button>
        </div>
    )
}

export default VoteCard
