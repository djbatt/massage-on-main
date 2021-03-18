const QUERY = `query {
  page(filter: {id: {eq: "21725734"}}) {
    bannerText
    id
    pageTitle
    summary(markdown: true)
    banner {
      responsiveImage {
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
      responsiveImage {
        alt
        src
        srcSet
        base64
        title
      }
    }
    serviceTwo {
      responsiveImage {
        alt
        src
        srcSet
        base64
        title
      }
    }
    
    serviceThree {
      responsiveImage {
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
  upload(filter: {id: {eq: "8642857"}}) {
    responsiveImage {
      alt
      src
      srcSet
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
  text-align: center;
`;

const FlexGrid = styled.div`
  display: flex;
  column-gap: 1rem;
  flex-wrap: wrap;
  & > div {
    background-color: ${(props) => props.theme.brandBlue};
    position: relative;
    height: 309px;
    flex: 1;
    min-width: 300px;
    margin-bottom: 16px;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  }
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
      </Head>

      <Header logo={data.upload.responsiveImage} />

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
            </div>
            <div>
              <ServiceCard data={data.page.serviceTwo.responsiveImage} />
            </div>
            <div>
              <ServiceCard data={data.page.serviceThree.responsiveImage} />
            </div>
          </FlexGrid>
        </Container>
      </main>
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
