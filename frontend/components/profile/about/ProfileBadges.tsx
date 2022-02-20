import ProfileBadge from "./ProfileBadge";
import {FC} from "react";

declare interface ProfileBadgesProps {
    user?: User
}

const ProfileBadges: FC<ProfileBadgesProps> = ({user}) => {

    if (!user) return <div />

    return (
        <div className="mt-4">
            <div className="mb-4 leading-4">
                <h1 className="text-xl text-gray-300">
                    Collected Badges:
                </h1>
                <h2 className="text-xs text-gray-500">
                    Badges are exclusive token players can collect by participating in special events or winning seasons!
                </h2>
            </div>
            <div className="flex flex-wrap gap-6 items-center">
                {user.minecraftUser.badges?.map((badge, index) => <ProfileBadge key={index} badge={badge} />)}
            </div>
        </div>
    )
}

export default ProfileBadges
