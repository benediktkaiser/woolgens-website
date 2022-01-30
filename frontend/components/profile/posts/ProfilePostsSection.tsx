import {FC} from "react";
import CardWithHeader from "../../common/cards/CardWithHeader";

declare interface ProfilePostsSection {
    user: FullUser
}

const ProfilePostsSection: FC<ProfilePostsSection> = ({user}) => {
    return (
        <CardWithHeader title="Profile posts">
            No one has posted anything yet! Be the first to say hello to {user.minecraftUser.name}
        </CardWithHeader>
    )
}

export default ProfilePostsSection
