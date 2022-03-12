import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <script
                    async
                    defer
                    data-domain='woolgens.net'
                    src='https://plausible.woolgens.net/js/plausible.js'
                />
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}
