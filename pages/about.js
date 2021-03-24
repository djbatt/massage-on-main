const QUERY = `query {
  page(filter: {id: {eq: "21725847"}}) {
    bannerText
    id
    pageTitle
    summary(markdown: true)
    banner {
      responsiveImage(imgixParams: {w: "2000"}) {
        alt
        src
        srcSet
        base64
      }
    }
    seo: _seoMetaTags {
      attributes
      content
      tag
    }
  }
  site: _site {
    favicon: faviconMetaTags {
      attributes
      content
      tag
    }
  }
  allUploads(filter: {id: {in: ["8642857", "10631945"]}}) {
    id
    responsiveImage {
      alt
      src
      srcSet
      title
    }
  }
}

`;

import { request } from "../lib/datocms";
import { renderMetaTags } from "react-datocms";
import parse from "html-react-parser";
import Head from "next/head";
import styled from "styled-components";

//Components
import Header from "../components/header";
import Banner from "../components/banner";
import Footer from "../components/footer";

const Container = styled.div`
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
`;

const BannerCard = styled.div`
  background-color: ${(props) => props.theme.brandBlue};
  padding: 20px;
  margin-top: -80px;
  display: flex;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  z-index: 1;
  position: relative;
  color: ${(props) => props.theme.background};
  justify-content: center;
  flex-direction: row;
`;

const BannerText = styled.h1`
  font-size: 22px;
  margin-top: 14px;
  text-align: center;
`;

function Page({ data }) {
  // Render data...
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://use.typekit.net/zvd5hlr.css"
        ></link>
        {renderMetaTags(data.page.seo.concat(data.site.favicon))}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=UA-189688387-1`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'UA-189688387-1', {
                      page_path: window.location.pathname,
                    });
                  `,
          }}
        />
      </Head>

      <Header
        logo={
          data.allUploads.filter((upload) => upload.id === "8642857")[0]
            .responsiveImage
        }
      />

      <main>
        <Banner data={data.page.banner.responsiveImage} />
        <Container>
          <BannerCard>
            <BannerText className="trajan">{data.page.bannerText}</BannerText>
          </BannerCard>
          <h1>{data.page.pageTitle}</h1>
          {parse(data.page.summary)}
        </Container>
      </main>
      <Footer
        logo={
          data.allUploads.filter((upload) => upload.id === "10631945")[0]
            .responsiveImage
        }
      />
    </>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  const data = await request({
    query: QUERY,
    variables: { limit: 10 },
  });

  // Pass data to the page via props
  return { props: { data } };
}

export default Page;
