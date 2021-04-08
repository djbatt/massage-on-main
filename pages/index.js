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
    responsiveImage(imgixParams: {w: "500"}) {
      alt
      src
      title
    }
  }
}
`;

import React from "react";
import styled from "styled-components";
import Head from "next/head";
import Link from "next/link";
import parse from "html-react-parser";

//CMS
import { request } from "../lib/datocms";
import { renderMetaTags, Image } from "react-datocms";

//Components
import Footer from "../components/footer";
import Header from "../components/header";
import Banner from "../components/banner";
import Container from "../components/container";
import Content from "../components/content";

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

  .service-item-1 {
    grid-area: a;
  }

  .service-item-2 {
    grid-area: b;
  }

  .service-item-3 {
    grid-area: c;
  }

  row-gap: 16px;
  column-gap: 16px;
  grid-template-rows: 300px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: "a b c";

  @media only screen and (max-width: 880px) {
    grid-template-rows: 300px 300px;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "a b"
      "c c";
  }

  @media only screen and (max-width: 560px) {
    grid-template-rows: 300px 300px 300px;
    grid-template-columns: 1fr;
    grid-template-areas:
      "a"
      "b"
      "c";
  }
`;

const ServiceCard = styled(Image)`
  height: 300px;
  object-fit: cover;
  opacity: 0.5;
  position: absolute !important;
  width: 100%;
  > picture > img {
    position: absolute;
    opacity: 0.5;
    object-fit: cover;
  }
`;

const ServiceTitle = styled.span`
  color: ${(props) => props.theme.colors.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
  position: relative;
  margin: auto;
`;

export default function Page({ data }) {
  const ServiceLink = React.forwardRef(
    ({ onClick, href, image, title }, ref) => {
      return (
        <a
          href={href}
          onClick={onClick}
          ref={ref}
          style={{ display: "flex", width: "100%", height: "100%" }}
        >
          <ServiceCard data={image} />
          <ServiceTitle className="trajan">{title}</ServiceTitle>
        </a>
      );
    }
  );

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
          <Content>{parse(data.page.summary)}</Content>
          <Grid>
            <div className="service-item-1">
              <Link href="/services/swedish-massage" passHref>
                <ServiceLink
                  title={data.page.serviceOne.responsiveImage.title}
                  image={data.page.serviceOne.responsiveImage}
                />
              </Link>
            </div>
            <div className="service-item-2">
              <Link href="/services/therapeutic-massage" passHref>
                <ServiceLink
                  title={data.page.serviceTwo.responsiveImage.title}
                  image={data.page.serviceTwo.responsiveImage}
                />
              </Link>
            </div>
            <div className="service-item-3">
              <Link href="/services/sports-massage" passHref>
                <ServiceLink
                  title={data.page.serviceThree.responsiveImage.title}
                  image={data.page.serviceThree.responsiveImage}
                />
              </Link>
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
