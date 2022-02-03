import NavbarLayout from "../layout/NavbarLayout";
import React from "react";
import ErrorPage from "../components/ErrorPage";

const NotFound: NextPageWithLayout = () => {
    return <ErrorPage title="Not found" subtitle="We could not find this page!" />
}

NotFound.getLayout = function getLayout(page) {
    const seo = {
        title: "Not found",
    }
    return (
        <NavbarLayout seo={seo}>
            {page}
        </NavbarLayout>
    )
}

export default NotFound
