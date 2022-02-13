import {observer} from "mobx-react-lite";
import NavbarLayout from "../layout/NavbarLayout";
import React from "react";
import NewsContainer from "../containers/NewsContainer";
import { NextSeo } from 'next-seo';

const IndexPage: NextPageWithLayout = observer(() => {
    return (
        <div>
            <NextSeo
                title="WoolGens Home Page"
                description="A short description goes here."
                openGraph={{
                    url: 'https://staging.woolgens.net',
                    title: 'WoolGens Home Page',
                    description: 'A short description goes here.',
                    images: [
                        {
                            url: 'https://i.imgur.com/jwsb0dY.jpg',
                            width: 800,
                            height: 600,
                            alt: 'Og Image Alt',
                            type: 'image/jpeg',
                        }
                    ],
                    site_name: 'WoolGens',
                }}
            />
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
