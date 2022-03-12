import SkillsCard from "./skills/SkillsCard";

declare interface SkillsCardProps {
    user?: User
    selectedSeason: string,
}

const ProfileSkills = ({user, selectedSeason}: SkillsCardProps) => {

    if (!user) return <div/>

    return (
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
            <SkillsCard level={user.minecraftUser.seasons[selectedSeason].skills.base.ATTACK}
                        skill="ATTACK"/>
            <SkillsCard level={user.minecraftUser.seasons[selectedSeason].skills.base.DEFENSE}
                        skill="DEFENSE"/>
            <SkillsCard level={user.minecraftUser.seasons[selectedSeason].skills.farming.AGRICULTURE}
                        skill="AGRICULTURE"/>
            <SkillsCard level={user.minecraftUser.seasons[selectedSeason].skills.farming.FISHING}
                        skill="FISHING"/>
            <SkillsCard level={user.minecraftUser.seasons[selectedSeason].skills.farming.MINING}
                        skill="MINING"/>
            <SkillsCard level={user.minecraftUser.seasons[selectedSeason].skills.farming.LUMBERJACK}
                        skill="LUMBERJACK"/>
        </div>
    )
}

export default ProfileSkills
