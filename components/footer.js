import styled from "styled-components";
import Link from "next/link";
import { Image } from "react-datocms";
import { Loader } from "@googlemaps/js-api-loader";

const Footer = styled.footer`
  display: flex;
  width: 100%;
  background-color: ${(props) => props.theme.background};
`;

const Container = styled.div`
  display: flex;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
`;

const FlexGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: start;
    flex: 1;
    position: relative;
    min-width: 300px;
    margin-bottom: 16px;
    margin-left: 8px;
    margin-right: 8px;
  }
`;

const Logo = styled(Image)`
  height: 60px;
  width: 162px;
  flex-shrink: 0;
  margin-bottom: 52px;
  z-index: 2;
  > picture > img {
    object-fit: contain;
  }
`;

const MenuList = styled.ul`
  padding-left: 0;
  list-style: none;
  display: flex;
  margin: 0;
  flex-direction: column;
  > li {
    font-weight: bold;
    height: fit-content;
    width: fit-content;
    margin-top: 6px;
    margin-bottom: 6px;
  }
`;

const FooterHeading = styled.span`
  font-size: 22px;
  font-weight: bold;
  margin-top: 6px;
  margin-bottom: 6px;
`;

const Hours = styled.span`
  margin-top: 6px;
  margin-bottom: 6px;
`;

function footer(props) {
  // Render data...
  return (
    <Footer>
      <Container>
        <FlexGrid>
          <div>
            <FooterHeading>Locate Us</FooterHeading>
          </div>
          <div>
            <FooterHeading>Business Hours</FooterHeading>
            <Hours>
                MON-FRI: 9AM - 10PM
            </Hours>
            <Hours>
                SAT-SUN: 10AM - 7PM
            </Hours>
            <FooterHeading>Reach Out</FooterHeading>
          </div>
          <div>
            <MenuList>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/common-questions">Common Questions</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/gift-cards">Gift Cards</Link>
              </li>
              <li>
                <Link href="/contact">Services</Link>
              </li>
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
            </MenuList>
          </div>
        </FlexGrid>
      </Container>
    </Footer>
  );
}

export default footer;