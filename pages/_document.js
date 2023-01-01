import * as React from 'react';
// next
import Document, { Html, Head, Main, NextScript } from 'next/document';

import palette from '../src/theme/palette';



export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="no">
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="theme-color" content={palette.light.primary.main} />
                    <meta
                        name="description"
                        content="Vi skal gifte oss! Vi gleder oss til å feire sammen. Husk å bekrefte."
                    />
                    <meta
                        name="keywords"
                        content="gifte ,bekrefte,invitasjon"
                    />
                    <meta name="author" content="Karolina Kulinska" />
                    {/* Favicon IMAGES HERE */}

                    {/* Fonts */}
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

