import NavbarLayout from "../layout/NavbarLayout";
import React from "react";
import ErrorPage from "../components/ErrorPage";
import SEO from "../components/SEO";

const Error = () => {
    return (
        <>
            <SEO seo={{
                title: "Server Error",
                description: "A server error occurred. Please try again later!",
                imageSRC: "/seo/404.jpg"
            }} />
            <ErrorPage title="An error occurred!" subtitle="This page could not be loaded!"/>
        </>
    )
}

Error.getLayout = function getLayout(page) {
    return (
        <NavbarLayout>
            {page}
        </NavbarLayout>
    )
}

export default Error
