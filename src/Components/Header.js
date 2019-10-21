import React from 'react';
import styled from 'styled-components';

const Navigation = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: rgb(66, 57, 57);
  height: 70px;
`;
const Logo = styled.div`
  color: white;
  font-size: 3em;
  text-transform: capitalize;
  font-weight: bold;
`;
const Ul = styled.ul`
  display: flex;
  width: 50%;
  list-style-type: none;
  justify-content: space-evenly;
`;
const Li = styled.li`
  margin: 0 20px;
`;
const Links = styled.a`
  text-decoration: none;
  color: white;
  font-family: 'Roboto';
  font-size: 1.2em;
`;

const Header = props => {
  return (
    <Navigation>
      <Logo>Fovie</Logo>
      <Ul>
        <Li>
          <Links href="/">Best Movies</Links>
        </Li>
        <Li>
          <Links href="/">Most Popular</Links>
        </Li>
        <Li>
          <Links href="/">Latest</Links>
        </Li>
      </Ul>
    </Navigation>
  );
};
export default Header;
