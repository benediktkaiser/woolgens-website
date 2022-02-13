import {observer} from "mobx-react-lite";
import NavbarLayout from "../layout/NavbarLayout";
import React from "react";
import NewsContainer from "../containers/NewsContainer";
import SEO from "../components/SEO"

const IndexPage: NextPageWithLayout = observer(() => {
    return (
        <div>
            <SEO seo={{
                title: "News",
                description: "Test",
                imageSRC: "https://i.imgur.com/jwsb0dY.jpg"
            }} />
            <NewsContainer />
        </div>
    )
})

IndexPage.getLayout = function getLayout(page) {
    return (
        <NavbarLayout>
            {page}
        </NavbarLayout>
    )
}

export default IndexPage
