import {FC} from "react";

declare interface ProfilePostsSection {
    user: User
}

const ProfilePostsSection: FC<ProfilePostsSection> = ({user}) => {

    if (!user) {
        return <div />
    }

    return (
        <div className="p-4">
            No one has posted anything yet! Be the first to say hello to {user.name}
        </div>
    )
}

export default ProfilePostsSection
