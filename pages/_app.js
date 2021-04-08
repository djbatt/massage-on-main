import { ThemeProvider, createGlobalStyle } from "styled-components";
import Router from "next/router";
import * as gtag from "../lib/gtag";

Router.events.on("routeChangeComplete", (url) => gtag.pageview(url));

const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
}

html,
body {
  display: flex; 
  flex-direction: column;
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-family: quasimoda, sans-serif;
    color: #272727;
    background-color: #f8f8ff;
}

.trajan {
  font-family: trajan-pro-3, serif;
}

a {
  color: inherit;
  text-decoration: none;
}

p, span {
  font-size: 20px;
  margin-top: 52px;
  margin-bottom: 52px;
}

h1, h2, h3, h4, h5, h6 {
  margin-top: 52px;
}

.hamburger-react {
  display: none;
  @media only screen and (max-width: 992px) {
    display: block;
    position: absolute!important;
    right: 20px;
    top: 25px;
    z-index: 2;
  }
}`;

const theme = {
  background: "#f8f8ff",
  text: "#272727",
  brandBlue: "#158ba8",
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
