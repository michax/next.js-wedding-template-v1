import ThemeProvider from '../src'
import '../styles/globals.css'
// lightbox
import 'react-image-lightbox/style.css';

// slick-carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';




function MyApp({ Component, pageProps }) {
  return (<ThemeProvider>
    <Component {...pageProps} />
  </ThemeProvider>)
}

export default MyApp
