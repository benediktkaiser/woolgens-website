import {observer} from "mobx-react-lite";
import NavbarLayout from "../../../layout/NavbarLayout";
import React from "react";
import LandStatsContainer from "../../../containers/LandStatsContainer";

const LandsIndexPage: NextPageWithLayout = observer(() => {
    return <LandStatsContainer />
})

LandsIndexPage.getLayout = function getLayout(page) {
    return (
        <NavbarLayout>
            {page}
        </NavbarLayout>
    )
}

export default LandsIndexPage
