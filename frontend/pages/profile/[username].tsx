import NavbarLayout from "../../layout/NavbarLayout";
import React from "react";
import UserProfileContainer from "../../containers/UserProfileContainer";

const ProfilePage: NextPageWithLayout = () => {
    return (
        <div>
            <UserProfileContainer />
        </div>
    )
}

ProfilePage.getLayout = function getLayout(page) {
    return (
        <NavbarLayout>
            {page}
        </NavbarLayout>
    )
}

export default ProfilePage
