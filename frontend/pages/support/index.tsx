import {observer} from "mobx-react-lite";
import NavbarLayout from "../../layout/NavbarLayout";
import React from "react";
import SEO from "../../components/SEO"
import dynamic from "next/dynamic";
import BasicCard from "../../components/common/cards/BasicCard";

const Editor = dynamic(() => import('../../components/quill/Editor'), {
    ssr: false
})

const IndexPage: NextPageWithLayout = observer(() => {
    return (
        <div>
            <SEO seo={{
                title: "News",
                description: "Welcome to the official Woolgens homepage! Here you can find news, statistics, interact with other users and learn more about our network.",
                imageSRC: "/seo/News.jpg"
            }}/>
            <BasicCard>
                <h1 className="my-2 text-2xl font-bold text-gray-300">
                    Simple Text
                </h1>
                <Editor showWords={true} />
            </BasicCard>
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
