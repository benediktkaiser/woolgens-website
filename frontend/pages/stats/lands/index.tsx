import {observer} from "mobx-react-lite";
import NavbarLayout from "../../../layout/NavbarLayout";
import React from "react";
import LandStatsContainer from "../../../containers/LandStatsContainer";

const LandsIndexPage: NextPageWithLayout = observer(() => {
    return <LandStatsContainer />
})

LandsIndexPage.getLayout = function getLayout(page) {
    const seo = {
        title: "Land Stats",
        description: "Compare yourself to other lands of the Woolgens community and rise to the top of the leaderboard!"
    }

    return (
        <NavbarLayout seo={seo}>
            {page}
        </NavbarLayout>
    )
}

export default LandsIndexPage
