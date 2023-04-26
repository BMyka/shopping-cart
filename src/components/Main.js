import React from "react";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Products from "../pages/Products";
import routes from "../constants/routes.json";

const Main = () => {
  return (
    <MainWrapper>
      <Routes>
        <Route path={routes.HOME} element={<Home />} />
        <Route path={routes.PRODUCTS} element={<Products />} />
        <Route path={routes.CONTACT} element={<Contact />} />
      </Routes>
    </MainWrapper>
  );
};

const MainWrapper = styled.main`
  max-width: ${({ theme }) => theme.widths.content};
  margin: 0 auto;
  padding: 4rem;
`;

export default Main;
