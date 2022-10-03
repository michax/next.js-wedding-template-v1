import * as React from 'react';
// next
import Document, { Html, Head, Main, NextScript } from 'next/document';
// emotion
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import createEmotionServer from '@emotion/server/create-instance';
// theme
import palette from '../src/theme/palette';

// ----------------------------------------------------------------------

function createEmotionCache() {
    return createCache({ key: 'css' });
}

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
                        href="https://fonts.googleapis.com/css2?family=Barlow:wght@500;600;700&display=swap"
                        rel="stylesheet"
                    />
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

// ----------------------------------------------------------------------

MyDocument.getInitialProps = async (ctx) => {
    const originalRenderPage = ctx.renderPage;

    const cache = createEmotionCache();
    const { extractCriticalToChunks } = createEmotionServer(cache);

    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (App) => (props) =>
            (
                <CacheProvider value={cache}>
                    <App {...props} />
                </CacheProvider>
            ),
        });

    const initialProps = await Document.getInitialProps(ctx);

    const emotionStyles = extractCriticalToChunks(initialProps.html);
    const emotionStyleTags = emotionStyles.styles.map((style) => (
        <style
            data-emotion={`${style.key} ${style.ids.join(' ')}`}
            key={style.key}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: style.css }}
        />
    ));

    return {
        ...initialProps,
        styles: [...React.Children.toArray(initialProps.styles), ...emotionStyleTags],
    };
};
