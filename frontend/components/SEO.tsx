import Head from 'next/head'
import React, {FC} from "react";
import {useRouter} from "next/router";

interface SEOProps {
    seo: {
        title?: string,
        description?: string,
        imageSRC?: string
    }
}

const SEO: FC<SEOProps> = ({seo}) => {
    const router = useRouter()
    const fallBackImage = ""

    return (
        <Head>
            {/* General Meta Tags */}
            <title>
                Woolgens &bull; {seo.title}
            </title>
            <meta name="title" content={seo.title}/>
            <meta name="description" content={seo.description}/>
            <meta name="robots" content="index, follow"/>
            <meta name="theme-color" content="#CB3737"/>
            <link rel="icon" href="/favicon.ico" />

            {/* Open graph meta tags */}
            <meta property="og:type" content="website"/>
            <meta property="og:url" content={router.asPath}/>
            <meta property="og:title" content={seo.title}/>
            <meta property="og:description" content={seo.description}/>
            <meta property="og:image" content={seo.imageSRC || fallBackImage}/>

            {/* Twitter meta tags */}
            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content={router.asPath}/>
            <meta property="twitter:title" content={seo.title}/>
            <meta property="twitter:description" content={seo.description}/>
            <meta property="twitter:image" content={seo.imageSRC || fallBackImage}/>
        </Head>
    )
}

export default SEO
