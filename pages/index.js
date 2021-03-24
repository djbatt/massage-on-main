const QUERY = `query {
  page(filter: {id: {eq: "21725734"}}) {
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
    serviceOne {
      responsiveImage(imgixParams: {w: "500"}) {
        alt
        src
        srcSet
        base64
        title
      }
    }
    serviceTwo {
      responsiveImage(imgixParams: {w: "500"}) {
        alt
        src
        srcSet
        base64
        title
      }
    }
    serviceThree {
      responsiveImage(imgixParams: {w: "500"}) {
        alt
        src
        srcSet
        base64
        title
      }
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
import ServiceCard from "../components/serviceCard";
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

const FlexGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  & > div {
    background-color: ${(props) => props.theme.text};
    display: flex;
    position: relative;
    height: 309px;
    flex: 1;
    min-width: 300px;
    margin-left: 8px;
    margin-right: 8px;
    margin-bottom: 16px;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  }
`;

const ServiceTitle = styled.span`
  color: ${(props) => props.theme.background};
  text-align: center;
  z-index: 1;
  position: relative;
  margin: auto;
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

      <Header logo={data.allUploads.filter(upload => upload.id === "8642857")[0].responsiveImage} />

      <main>
        <Banner data={data.page.banner.responsiveImage} />
        <Container>
          <BannerCard>
            <BannerText className="trajan">{data.page.bannerText}</BannerText>
          </BannerCard>
          {parse(data.page.summary)}
          <FlexGrid>
            <div>
              <ServiceCard data={data.page.serviceOne.responsiveImage} />
              <ServiceTitle className="trajan">
                {data.page.serviceOne.responsiveImage.title}
              </ServiceTitle>
            </div>
            <div>
              <ServiceCard data={data.page.serviceTwo.responsiveImage} />
              <ServiceTitle className="trajan">
                {data.page.serviceTwo.responsiveImage.title}
              </ServiceTitle>
            </div>
            <div>
              <ServiceCard data={data.page.serviceThree.responsiveImage} />
              <ServiceTitle className="trajan">
                {data.page.serviceThree.responsiveImage.title}
              </ServiceTitle>
            </div>
          </FlexGrid>
        </Container>
      </main>
      <Footer logo={data.allUploads.filter(upload => upload.id === "10631945")[0].responsiveImage} />
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
