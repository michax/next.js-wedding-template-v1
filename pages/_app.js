import ThemeProvider from '../src'
import '../styles/globals.css'
// lightbox
import 'react-image-lightbox/style.css';
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import '@splidejs/splide/dist/css/splide.min.css';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';




function MyApp({ Component, pageProps }) {
  return (<ThemeProvider>
    <Component {...pageProps} />
  </ThemeProvider>)
}

export default MyApp
