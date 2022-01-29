export function getHighestSkill(skills: Skills): BaseSkills | FarmingSkills | "NEWBIE" {
    let level = 0;
    let skill = undefined

    Object.entries(skills.farming).forEach(([key, value]) => {
        if (value >= level) {
            level = value;
            skill = key;
        }
    })

    Object.entries(skills.base).forEach(([key, value]) => {
        if (value >= level) {
            level = value;
            skill = key;
        }
    })

    if (level === 1) {
        return "NEWBIE"
    }

    return skill;
}

export function getLevelProgressPercentage(level: number, exp: number): number {
    const neededEXP = 100 * (1.12 ** (level))
    return (exp * 100) / neededEXP
}

export const SKILL_TITLES: Record<BaseSkills | FarmingSkills | string, string> = {
    "AGRICULTURE": "Farmer",
    "DEFENSE": "Tank",
    "ATTACK": "Swordsman",
    "FISHING": "Fisherman",
    "MINING": "Miner",
    "LUMBERJACK": "Lumberjack",
    "NEWBIE": "Newbie"
}
