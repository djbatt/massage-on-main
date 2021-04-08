import styled from "styled-components";
import Link from "next/link";
import { Instagram, FacebookSquare } from "@styled-icons/boxicons-logos";

//Components
import Container from "../container";
import Map from "./map";
import Copyright from "./copyright";

const Footer = styled.footer`
  display: flex;
  width: 100%;
`;

const Grid = styled.div`
  display: grid;

  & > div {
    display: flex;
    flex-direction: column;
  }

  .footer-item-1 {
    grid-area: a;
  }

  .footer-item-2 {
    grid-area: b;
  }

  .footer-item-3 {
    grid-area: c;
  }

  row-gap: 16px;
  column-gap: 16px;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas:
    "a b c";

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
  font-size: 20px;
  font-weight: bold;
`;

const Insta = styled(Instagram)`
  color: ${(props) => props.theme.colors.brandBlue};
  width: 36px;
`;

const Fb = styled(FacebookSquare)`
  color: ${(props) => props.theme.colors.brandBlue};
  width: 36px;
`;

// Render data...

function footer() {
  return (
    <Footer>
      <Container>
        <Grid>
          <div className="footer-item-1">
            <FooterHeading>Site Map</FooterHeading>
            <MenuList>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <div style={{ display: "flex" }}>
                  <a
                    href="https://www.facebook.com/massageonmainrva"
                    rel="noopener"
                    target="_blank"
                  >
                    <Fb />
                  </a>
                  <a
                    href="https://www.instagram.com/massageonmainrva/"
                    rel="noopener"
                    target="_blank"
                  >
                    <Insta />
                  </a>
                </div>
              </li>
            </MenuList>
          </div>
          <div className="footer-item-2">
            <FooterHeading>Locate Us</FooterHeading>
            <span>
              Massage On Main is located at 2602 W Main St. You can find extra
              parking in the alleyway behind Main St and N Robinson St. Look for
              the cement parking lot.
            </span>
            <FooterHeading>Business Hours</FooterHeading>
            <span>MON-FRI: 9AM - 10PM</span>
            <span>SAT-SUN: 10AM - 7PM</span>
          </div>
          <div style={{ height: "300px" }} className="footer-item-3">
            <Map/>
          </div>
        </Grid>
        <Copyright />
      </Container>
    </Footer>
  );
}

export default footer;
