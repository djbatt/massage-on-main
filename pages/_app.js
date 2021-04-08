import { createGlobalStyle, ThemeProvider } from "styled-components";
import Router from "next/router";
import * as gtag from "../lib/gtag";

// Notice how we track pageview when route is changed
Router.events.on("routeChangeComplete", (url) => gtag.pageview(url));

const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
}

html {
  height: -webkit-fill-available;
}

body {
  min-height: 100vh;
  /* mobile viewport bug fix */
  min-height: -webkit-fill-available;
}

#__next {
  min-height: 100vh;
  min-height: -webkit-fill-available;
  display: flex;
  flex-direction: column;
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

main {
  flex: 1;
}
.trajan {
  font-family: trajan-pro-3, serif;
}

a {
  color: inherit;
  text-decoration: none;
  width: fit-content;
  height: fit-content;
}

span {
  margin-top: 6px;
  margin-bottom: 6px;
}

.hamburger-react {
  display: none;
  @media only screen and (max-width: 992px) {
    display: block;
    position: absolute!important;
    right: 20px;
    top: 40px;
    z-index: 3;
  }
}
`;

const theme = {
  colors: {
    background: "#f8f8ff",
    text: "#272727",
    brandBlue: "#158ba8",
  },
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
