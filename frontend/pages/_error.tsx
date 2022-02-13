import NavbarLayout from "../layout/NavbarLayout";
import React from "react";
import ErrorPage from "../components/ErrorPage";

const Error = () => {
    return <ErrorPage title="An error occurred!" subtitle="This page could not be loaded!" />
}

Error.getLayout = function getLayout(page) {
    return (
        <NavbarLayout>
            {page}
        </NavbarLayout>
    )
}

export default Error
