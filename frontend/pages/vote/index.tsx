import {observer} from "mobx-react-lite";
import NavbarLayout from "../../layout/NavbarLayout";
import Announcement from "../../components/common/Announcement";
import {FiBell} from "react-icons/fi"
import {BaseButton} from "../../components/common/BaseButton";
import React from "react";

const VoteIndexPage = observer(() => {

    const seo = {
        title: "Vote",
        description: "Vote for our server to gain exclusive rewards, while simultaneously supporting us!"
    }

    return (
        <NavbarLayout seo={seo}>
            <Announcement
                icon={<FiBell />}
                text="Welcome to the new Website! We hope you enjoy it."
                rightComponent={<BaseButton type="primary">Create account</BaseButton>}
                iconStyles="bg-blue-500 text-white"
            />
        </NavbarLayout>
    )
})

export default VoteIndexPage
