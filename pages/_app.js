import "../styles/globals.css";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Head from "next/head";
import theme from "../src/theme/theme";
// lightbox
import "react-image-lightbox/style.css";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import "@splidejs/splide/dist/css/splide.min.css";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Digital Wedding Invitations</title>
        <meta
          name="description"
          content="Application designed to help couples plan and organize their special day "
        />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
