const QUERY = `query {
  page(filter: {id: {eq: "25650479"}}) {
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

import React from "react";
import styled from "styled-components";
import Head from "next/head";
import parse from "html-react-parser";

//CMS
import { request } from "../../lib/datocms";
import { renderMetaTags } from "react-datocms";

//Components
import Footer from "../../components/footer";
import Header from "../../components/header";
import Banner from "../../components/banner";
import Container from "../../components/container";
import Content from "../../components/content";

const BannerCard = styled.div`
  background-color: ${(props) => props.theme.colors.brandBlue};
  padding: 20px;
  margin-top: -80px;
  display: flex;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  z-index: 1;
  position: relative;
  color: ${(props) => props.theme.colors.background};
  justify-content: center;
  flex-direction: row;
`;

const BannerText = styled.h1`
  font-size: 22px;
  margin-top: 14px;
  margin-bottom: 14px;
  text-align: center;
`;

const Grid = styled.div`
  display: grid;

  & > div {
    background-color: ${(props) => props.theme.colors.text};
    display: flex;
    flex-direction: column;
    flex: 1;
    position: relative;
    width: 100%;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  }

  .price-item-1 {
    grid-area: a;
  }

  .price-item-2 {
    grid-area: b;
  }

  .price-item-3 {
    grid-area: c;
  }

  row-gap: 16px;
  column-gap: 16px;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: "a b c";

  @media only screen and (max-width: 880px) {
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "a b"
      "c c";
  }

  @media only screen and (max-width: 560px) {
    grid-template-rows: auto auto auto;
    grid-template-columns: 1fr;
    grid-template-areas:
      "a"
      "b"
      "c";
  }
`;

const PriceCard = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.brandBlue};
  & > span {
    color: ${(props) => props.theme.colors.background};
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

export default function Page({ data }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {renderMetaTags(data.page.seo.concat(data.site.favicon))}
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
          <Content>
            <h1>{data.page.pageTitle}</h1>
            {parse(data.page.summary)}
          </Content>
          <Grid>
            <div className="price-item-1">
              <PriceCard>
                <span className="trajan">30 Minutes - $50</span>
              </PriceCard>
            </div>
            <div className="price-item-2">
              <PriceCard>
                <span className="trajan">60 Minutes - $80</span>
              </PriceCard>
            </div>
            <div className="price-item-3">
              <PriceCard>
                <span className="trajan">90 Minutes - $120</span>
              </PriceCard>
            </div>
          </Grid>
        </Container>
      </main>
      <Footer />
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
