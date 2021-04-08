import { useState, useEffect } from "react";
import { Squeeze as Hamburger } from "hamburger-react";
import styled from "styled-components";
import Link from "next/link";

const NavContainer = styled.div`
  @media only screen and (max-width: 992px) {
    display: ${(props) => (props.isNavOpen ? "flex" : "none")};
    flex-direction: column;
    justify-content: space-between;
    background-color: ${(props) => props.theme.colors.background};
    position: absolute;
    top: 0;
    left: 0;
    padding: 124px 20px 20px 20px;
    height: 100vh;
    height: webkit-fill-available;
    width: 100%;
    z-index: 2;
    overflow: auto;
  }
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: 100%;
`;

const Navigation = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  height: 100%;
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
    width: 100%;
    height: fit-content;
    > li {
      margin-top: 12px;
      margin-bottom: 12px;
      margin-right: 0;
      margin-left: 0;
    }
  }
`;

const BookingButton = styled.div`
  padding: 12px;
  border-radius: 4px;
  color: ${(props) => props.theme.colors.background};
  background-color: ${(props) => props.theme.colors.brandBlue};
`;

const PhoneButton = styled.div`
  padding: 12px;
  border-radius: 4px;
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.background};
  border: 1px solid ${(props) => props.theme.colors.text};
`;

const Contact = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: none;
  height: fit-content;
  flex-direction: column;
  > li {
    margin-top: 12px;
    margin-bottom: 12px;
    margin-right: 0;
    margin-left: 0;
  }
  @media only screen and (max-width: 992px) {
    display: flex;
  }
`;

const Spacer = styled.hr`
  background-color: ${(props) => props.theme.colors.text};
  height: 1px;
  width: 200px;
  margin-left: 0;
`;

function nav(props) {
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
    <>
      <Hamburger
        toggled={isOpen}
        toggle={setOpen}
        label="Page Navigation Menu"
        color="#158ba8"
      />
      <NavContainer isNavOpen={isOpen}>
        <ListContainer>
          <Navigation>
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
              <a
                href="https://square.site/book/LH466QXPEW2KV/massage-on-main-llc-richmond-va"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BookingButton>Booking</BookingButton>
              </a>
            </li>
            <li>
              <a href="tel:+18044242607">
                <PhoneButton>(804) 424-2607</PhoneButton>
              </a>
            </li>
          </Navigation>
          <Contact>
            <Spacer />
            <li>
              <span>Anthony@massageonmainrva.com</span>
            </li>
            <li>
              <span>2602 West Main St.</span>
            </li>
            <li>
              <span>Richmond, Virginia 23220</span>
            </li>
          </Contact>
        </ListContainer>
      </NavContainer>
    </>
  );
}

export default nav;
