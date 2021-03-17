import { request } from "../lib/datocms";
import { Image, renderMetaTags } from "react-datocms";
import parse from "html-react-parser";
import Head from "next/head";

//Components
import Header from "../components/header";
import Banner from '../components/banner';

const QUERY = `query {
  page(filter: {id: {eq: "21725847"}}) {
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

function Page({ data }) {
  // Render data...
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="https://use.typekit.net/zvd5hlr.css"></link>
        {renderMetaTags(data.page.seo.concat(data.site.favicon))}
      </Head>

      <Header logo={data.upload.responsiveImage}/>

      <main>
        <Banner data={data.page.banner.responsiveImage} />
        <h1>{data.page.bannerText}</h1>
        {parse(data.page.summary)}
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
