import '../styles/globals.scss'
import { ThemeProvider } from 'styled-components';
import theme from "../styles/theme";
import Router from "next/router"
import * as gtag from "../lib/gtag"

Router.events.on('routeChangeComplete', (url) => gtag.pageview(url))

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
