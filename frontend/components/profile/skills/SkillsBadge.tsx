import {FC} from "react";
import {
    GiAxeInStump,
    GiBorderedShield,
    GiBroadsword,
    GiFishingHook,
    GiSprout,
    GiWarPick,
    GiWheat
} from "react-icons/gi";

declare interface SkillsBadgeProps {
    skill: BaseSkills | FarmingSkills | "NEWBIE",
}

const SKILLS_ICONS = {
    "AGRICULTURE": <GiWheat size="7.5rem" className="svg-shadow" />,
    "DEFENSE": <GiBorderedShield size="7.5rem" className="svg-shadow" />,
    "ATTACK": <GiBroadsword size="7.5rem" className="svg-shadow" />,
    "FISHING": <GiFishingHook size="7.5rem" className="svg-shadow" />,
    "MINING": <GiWarPick size="7.5rem" className="svg-shadow" />,
    "LUMBERJACK": <GiAxeInStump size="7.5rem" className="svg-shadow" />,
    "NEWBIE": <GiSprout size="7.5rem" className="svg-shadow" />,
}

const SkillsBadge: FC<SkillsBadgeProps> = ({skill}) => {

    return SKILLS_ICONS[skill]
}

export default SkillsBadge
