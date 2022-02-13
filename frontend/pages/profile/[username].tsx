import NavbarLayout from "../../layout/NavbarLayout";
import React from "react";
import UserProfileContainer from "../../containers/UserProfileContainer";
import SEO from "../../components/SEO";

const ProfilePage: NextPageWithLayout = () => {
    return (
        <div>
            <SEO seo={{
                title: "News",
                description: "Test",
                imageSRC: `/api/previews/user/ReaperMaga`
            }} />
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
