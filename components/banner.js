import { Image } from "react-datocms";
import styled from "styled-components";

const Banner = styled(Image)`
    height: 400px;
    object-fit: cover;
    > picture > img {
        object-fit: cover;
    }
`

function banner(props) {
  // Render data...
  return (
    <>
      <Banner data={props.data} />
    </>
  );
}

export default banner;
