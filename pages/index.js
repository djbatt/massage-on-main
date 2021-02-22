import { request } from "../lib/datocms";
import { Image } from "react-datocms";
import Head from "next/head";

const HOMEPAGE_QUERY = `query {
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
  }
}
`;

function Page({ data }) {
  // Render data...
  return (
    <div>
      <Head>
        <title>Massage On Main</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image data={data.page.banner.responsiveImage} />
      <h1>{data.page.bannerText}</h1>
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  const data = await request({
    query: HOMEPAGE_QUERY,
    variables: { limit: 10 },
  });

  console.log(data, "data");

  // Pass data to the page via props
  return { props: { data } };
}

export default Page;
