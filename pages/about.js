import { request } from "../lib/datocms";
import parse from "html-react-parser";

const ABOUT_QUERY = `query {
  page(filter: {id: {eq: "21725847"}}) {
    bannerText
    id
    pageTitle
    summary(markdown: true)
  }
}`;

function Page({ data }) {
  // Render data...
  return (
    <div>
      <h1>{data.page.bannerText}</h1>
      {parse(data.page.summary)}
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  const data = await request({
    query: ABOUT_QUERY,
    variables: { limit: 10 },
  });

  // Pass data to the page via props
  return { props: { data } };
}

export default Page;
