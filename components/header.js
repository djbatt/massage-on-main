import styled from 'styled-components';
import Link from "next/link";

const Title = styled.h1`
    text-align: center;
`

const Header = styled.header`
    width: 100%;
    padding: 20px;
    height: fit-content;
    display: flex;
    flex-direction: row;
`

const MenuList = styled.ul`
    padding-left: 0;
    list-style: none;
`

function header() {
  // Render data...
  return (
      <Header>
        <Title>
            Massage On Main
        </Title>
        <nav>
            <MenuList>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
            </MenuList>
        </nav>
      </Header>
  );
}

export default header;
