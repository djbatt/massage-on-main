import styled from "styled-components";
import Link from "next/link";
import { Image } from "react-datocms";
import { Squeeze as Hamburger } from "hamburger-react";
import { useState, useEffect } from "react";

const Header = styled.header`
  width: 100%;
  padding: 20px;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-shadow: 0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 100px 80px rgba(0, 0, 0, 0.07);
  @media only screen and (max-width: 992px) {
    flex-direction: column;
    height: ${(props) => (props.toggled ? "100vh" : "auto")};
  }
`;

const Logo = styled(Image)`
  height: 60px;
  width: 162px;
  flex-shrink: 0;
  z-index: 2;
  > picture > img {
    object-fit: contain;
  }
`;

const BookingButton = styled.a`
  padding: 12px;
  border-radius: 4px;
  color: ${(props) => props.theme.background};
  background-color: ${(props) => props.theme.brandBlue};
`;

const Nav = styled.nav`
  flex-direction: column;
  justify-content: center;
  display: flex;
  @media only screen and (max-width: 992px) {
    display: ${(props) => (props.toggled ? "flex" : "none")};
    overflow: scroll;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.background};
    z-index: 1;
    flex-direction: column;
    justify-content: start;
  }
`;

const MenuList = styled.ul`
  padding-left: 0;
  list-style: none;
  display: flex;
  margin: 0;
  > li {
    font-weight: bold;
    height: fit-content;
    width: fit-content;
    margin-top: auto;
    margin-bottom: auto;
    margin-right: 12px;
    margin-left: 12px;
  }
  @media only screen and (max-width: 992px) {
    flex-direction: column;
    z-index: 1;
    width: 100%;
    background-color: ${(props) => props.theme.background};
    > li {
      margin-top: 12px;
      margin-bottom: 12px;
      margin-left: 0px;
      flex-direction: column;
    }
  }
`;

const ContactInfo = styled.ul`
  padding-left: 0;
  margin-top: 0px;
  margin-bottom: 0px;
  list-style: none;
  display: none;
  > li {
    margin-top: 6px;
    margin-bottom: 6px;
  }

  @media only screen and (max-width: 992px) {
    margin-top: 20px;
    flex-direction: column;
    display: flex;
  }
`;

const Spacer = styled.hr`
  background-color: ${(props) => props.theme.text};
  height: 1px;
  width: 200px;
  margin-left: 0;
`;

function header(props) {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (isOpen === false) {
      document.body.style.overflow = "unset";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [isOpen]);
  // Render data...
  return (
    <Header toggled={isOpen}>
      <Link href="/" passHref>
        <Logo data={props.logo} />
      </Link>
      <Hamburger
        toggled={isOpen}
        toggle={setOpen}
        label="Page Navigation Menu"
        color="#272727"
      />
      <Nav toggled={isOpen}>
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
            <BookingButton
              href="https://square.site/book/LH466QXPEW2KV/massage-on-main-llc-richmond-va"
              target="_blank"
            >
              Booking
            </BookingButton>
          </li>
        </MenuList>
        <ContactInfo>
          <Spacer />
          <li>
            <a href="tel:+18044242607">(804) 424-2607</a>
          </li>
          <li>
            <span>Anthony@massageonmainrva.com</span>
          </li>
          <li>
            <span>2602 West Main St.</span>
          </li>
          <li>
            <span>Richmond, Virginia 23220</span>
          </li>
        </ContactInfo>
      </Nav>
    </Header>
  );
}

export default header;
