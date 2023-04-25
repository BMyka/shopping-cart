import React from "react";
import styled, { css } from "styled-components";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderTitle>Header</HeaderTitle>
    </HeaderWrapper>
  );
};
const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background-color: #000;
  color: #fff;
`;

const HeaderTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
`;
export default Header;
