import NavbarLayout from "../layout/NavbarLayout";
import React from "react";
import ErrorPage from "../components/ErrorPage";
import SEO from "../components/SEO";

const NotFound: NextPageWithLayout = () => {
    return (
        <div>
            <SEO seo={{
                title: "Not found",
                description: "We sadly could not find this page. If you believe this is an error, please contact our support team.",
                imageSRC: "/seo/404.jpg"
            }} />
            <ErrorPage title="Not found" subtitle="We could not find this page!" />
        </div>
    )
}

NotFound.getLayout = function getLayout(page) {
    return (
        <NavbarLayout>
            {page}
        </NavbarLayout>
    )
}

export default NotFound
