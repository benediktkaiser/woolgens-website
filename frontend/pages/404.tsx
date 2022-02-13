import NavbarLayout from "../layout/NavbarLayout";
import React from "react";
import ErrorPage from "../components/ErrorPage";

const NotFound: NextPageWithLayout = () => {
    return <ErrorPage title="Not found" subtitle="We could not find this page!" />
}

NotFound.getLayout = function getLayout(page) {
    return (
        <NavbarLayout>
            {page}
        </NavbarLayout>
    )
}

export default NotFound
