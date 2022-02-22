import {FC} from "react";
import {GiAxeInStump, GiBorderedShield, GiBroadsword, GiFishingHook, GiWarPick, GiWheat} from "react-icons/gi";

declare interface SkillsCardProps {
    level: number
    skill: BaseSkills | FarmingSkills
}

const SkillsCard: FC<SkillsCardProps> = ({skill, level}) => {

    let title = ""
    let icon = undefined

    if (skill === "AGRICULTURE") {
        icon = <GiWheat size="3rem" className="mx-auto" />
        title = "Farmer"
    }

    if (skill === "DEFENSE") {
        icon = <GiBorderedShield size="3rem" className="mx-auto" />
        title = "Tank"
    }

    if (skill === "ATTACK") {
        icon = <GiBroadsword size="3rem" className="mx-auto" />
        title = "Swordsman"
    }

    if (skill === "FISHING") {
        icon = <GiFishingHook size="3rem" className="mx-auto" />
        title = "Fisherman"
    }

    if (skill === "MINING") {
        icon = <GiWarPick size="3rem" className="mx-auto" />
        title = "Miner"
    }

    if (skill === "LUMBERJACK") {
        icon = <GiAxeInStump size="3rem" className="mx-auto" />
        title = "Lumberjack"
    }

    return (
        <div className="group py-4 px-3 w-full leading-3 text-center hover:bg-dark-light rounded-xl hover:scale-105 cursor-pointer bg-dark-light/50">
            <span className="text-gray-400 group-hover:text-gray-100">
                 {icon}
            </span>
            <h1 className="mt-2 text-lg font-bold">
                {title}
            </h1>
            <h2 className="text-sm">
                Level {level ? level : 1}
            </h2>
        </div>
    )
}

export default SkillsCard
