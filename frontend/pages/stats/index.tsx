import {observer} from "mobx-react-lite";
import NavbarLayout from "../../layout/NavbarLayout";
import React from "react";
import StatsContainer from "../../containers/StatsContainer";

const StatsIndexPage: NextPageWithLayout = observer(() => {
    return <StatsContainer />
})

StatsIndexPage.getLayout = function getLayout(page) {
    return (
        <NavbarLayout>
            {page}
        </NavbarLayout>
    )
}

export default StatsIndexPage
