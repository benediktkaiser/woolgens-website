import {FC} from "react";
import CardWithHeader from "../../common/cards/CardWithHeader";

declare interface ProfilePostsSection {
    user: User
}

const ProfilePostsSection: FC<ProfilePostsSection> = ({user}) => {

    if (!user) {
        return <div />
    }

    return (
        <CardWithHeader title="Profile posts">
            No one has posted anything yet! Be the first to say hello to {user.name}
        </CardWithHeader>
    )
}

export default ProfilePostsSection
