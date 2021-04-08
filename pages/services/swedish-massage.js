const QUERY = `query {
    page(filter: {id: {eq: "25651732"}}) {
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

import { request } from "../../lib/datocms";
import { renderMetaTags } from "react-datocms";
import parse from "html-react-parser";
import Head from "next/head";
import styled from "styled-components";

//Components
import Header from "../../components/header";
import Banner from "../../components/banner";
import Footer from "../../components/footer";

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
  margin-left: auto;
  margin-right: auto;
  & > div {
    display: flex;
    flex-direction: column;
    position: relative;
    flex: 1;
    margin-left: 8px;
    margin-right: 8px;
    min-width: 300px;
    margin-bottom: 16px;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);

    & > span {
      margin-left: auto;
      margin-right: auto;
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }
`;

const CardTitle = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.brandBlue};
  & > span {
    color: ${(props) => props.theme.background};
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

function Page({ data }) {
  // Render data...
  return (
    <>
      <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
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
          <h1>{data.page.pageTitle}</h1>
          {parse(data.page.summary)}
          <FlexGrid>
            <div>
              <CardTitle>
                <span class="trajan">30 Minutes - $50</span>
              </CardTitle>
            </div>
            <div>
              <CardTitle>
                <span class="trajan">60 Minutes - $80</span>
              </CardTitle>
            </div>
            <div>
              <CardTitle>
                <span class="trajan">90 Minutes - $120</span>
              </CardTitle>
            </div>
          </FlexGrid>
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
