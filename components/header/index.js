import { forwardRef } from "react";
import styled from "styled-components";
import { Image } from "react-datocms";
import Link from "next/link";

import Nav from "./nav";

const Header = styled.header`
  width: 100%;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  background-color: ${(props) => props.theme.colors.background};
`;

const Container = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  @media only screen and (max-width: 992px) {
    flex-direction: column;
  }
`;

const Logo = styled(Image)`
  height: 84px;
  width: 220px;
  flex-shrink: 0;
  image-rendering: high-quality;
  z-index: 3;
  > picture > img {
    object-fit: contain;
    image-rendering: high-quality;
  }
`;

function header(props) {
  
  const LogoWithLink = forwardRef(
    ({ onClick, href, image, title }, ref) => {
      return (
        <a
          href={href}
          onClick={onClick}
          ref={ref}
          style={{width: "fit-content", height: "fit-content"}}
        >
          <Logo data={props.logo}/>
        </a>
      );
    }
  );
  // Render data...
  return (
    <Header>
      <Container>
        <Link href="/" passHref>
          <LogoWithLink />
        </Link>
        <Nav/>
      </Container>
    </Header>
  );
}

export default header;
