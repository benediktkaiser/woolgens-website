import {observer} from "mobx-react-lite";
import NavbarLayout from "../layout/NavbarLayout";
import React from "react";
import NewsContainer from "../containers/NewsContainer";

const IndexPage: NextPageWithLayout = observer(() => {
    return <NewsContainer />
})

IndexPage.getLayout = function getLayout(page) {
    const seo = {
        title: "News",
        description: "Welcome to the WoolGens homepage! Here you can find stats, news and communicate with other community members!"
    }

    return <NavbarLayout seo={seo}>{page}</NavbarLayout>
}

export default IndexPage
