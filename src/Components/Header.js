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

const Header = props => {
  return (
    <Navigation>
      <div className="logo">Find_Ma_Movie</div>
      <ul>
        <li>
          <a href="/">Best Movies</a>
        </li>
        <li>
          <a href="/">Most Popular</a>
        </li>
        <li>
          <a href="/">Latest</a>
        </li>
      </ul>
    </Navigation>
  );
};
export default Header;
