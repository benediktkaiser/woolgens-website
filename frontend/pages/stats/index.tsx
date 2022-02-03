import {observer} from "mobx-react-lite";
import NavbarLayout from "../../layout/NavbarLayout";
import React from "react";
import StatsContainer from "../../containers/StatsContainer";

const StatsIndexPage: NextPageWithLayout = observer(() => {
    return <StatsContainer />
})

StatsIndexPage.getLayout = function getLayout(page) {
    const seo = {
        title: "Stats",
        description: "Compare yourself to other members of the Woolgens community and rise to the top of the leaderboard!"
    }

    return (
        <NavbarLayout seo={seo}>
            {page}
        </NavbarLayout>
    )
}

export default StatsIndexPage
