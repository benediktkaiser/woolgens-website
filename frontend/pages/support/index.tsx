import {observer} from "mobx-react-lite";
import NavbarLayout from "../../layout/NavbarLayout";
import React, {useState} from "react";
import SEO from "../../components/SEO"
import dynamic from "next/dynamic";
import BasicCard from "../../components/common/cards/BasicCard";
import Renderer from "../../components/quill/Renderer";

const Editor = dynamic(() => import('../../components/quill/Editor'), {
    ssr: false
})

const IndexPage: NextPageWithLayout = observer(() => {
    const [content, setContent] = useState('')

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
                <Editor
                    content={content}
                    setContent={setContent}
                    showWords={true}
                    maxWords={200}
                />
            </BasicCard>
            <br />
            <BasicCard>
                <Renderer value={content} />
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
