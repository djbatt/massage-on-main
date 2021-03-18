import { Image } from "react-datocms";
import styled from "styled-components";

const Service = styled(Image)`
    height: 309px;
    object-fit: cover;
    opacity: .5;
    position: absolute!important;
    width: 100%;
    > picture > img {
        position: absolute;
        opacity: .5;
        object-fit: cover;
    }
`

function banner(props) {
  // Render data...
  return (
    <>
      <Service data={props.data} />
    </>
  );
}

export default banner;
