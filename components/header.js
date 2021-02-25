import styled from "styled-components";
import Link from "next/link";
import { Image } from "react-datocms";

const Logo = styled(Image)`
  height: 60px;
  width: 200px;
  > picture > img {
    object-fit: contain;
  }
`;

const StyledLink = styled.li`
    font-weight: bold;    
    height: fit-content;
    width: fit-content;
    margin-top: auto;
    margin-bottom: auto;
    margin-right: 12px;
    margin-left: 12px;

    &:last-of-type {
        color: #f8f8ff;
    }
`;

const BookingButton = styled.a`
  padding: 12px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.brandBlue};
`;

const Header = styled.header`
  width: 100%;
  padding: 20px;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-shadow: 0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 100px 80px rgba(0, 0, 0, 0.07);
`;

const MenuList = styled.ul`
  padding-left: 0;
  list-style: none;
  display: flex;
  height: 100%;
  margin: 0;
`;

function header(props) {
  // Render data...
  return (
    <Header>
      <Link href="/">
        <Logo data={props.logo} />
      </Link>
      <nav>
        <MenuList>
          <StyledLink>
            <Link href="/">Home</Link>
          </StyledLink>
          <StyledLink>
            <Link href="/about">About</Link>
          </StyledLink>
          <StyledLink>
            <Link href="/common-questions">Common Questions</Link>
          </StyledLink>
          <StyledLink>
            <Link href="/contact">Contact</Link>
          </StyledLink>
          <StyledLink>
            <Link href="/gift-cards">Gift Cards</Link>
          </StyledLink>
          <StyledLink>
            <Link href="/contact">Services</Link>
          </StyledLink>
          <StyledLink>
            <BookingButton
              href="https://square.site/book/LH466QXPEW2KV/massage-on-main-llc-richmond-va"
              target="_blank"
            >
              Booking
            </BookingButton>
          </StyledLink>
        </MenuList>
      </nav>
    </Header>
  );
}

export default header;
