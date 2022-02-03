import NavbarLayout from "../../layout/NavbarLayout";
import React from "react";
import UserProfileContainer from "../../containers/UserProfileContainer";

const ProfilePage: NextPageWithLayout = () => {
    return <UserProfileContainer />
}

ProfilePage.getLayout = function getLayout(page) {
    const seo = {
        title: 'User Profile',
        description: "Welcome to the WoolGens homepage! Here you can find stats, news and communicate with other community members!",
    }

    return (
        <NavbarLayout seo={seo}>
            {page}
        </NavbarLayout>
    )
}

export default ProfilePage
