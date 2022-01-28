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
    "AGRICULTURE": <GiWheat size="8rem" />,
    "DEFENSE": <GiBorderedShield size="8rem" />,
    "ATTACK": <GiBroadsword size="8rem" />,
    "FISHING": <GiFishingHook size="8rem" />,
    "MINING": <GiWarPick size="8rem" />,
    "LUMBERJACK": <GiAxeInStump size="8rem" />,
    "NEWBIE": <GiSprout size="8rem" />,
}

const SkillsBadge: FC<SkillsBadgeProps> = ({skill}) => {

    return SKILLS_ICONS[skill]
}

export default SkillsBadge
