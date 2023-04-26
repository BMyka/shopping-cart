import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Cart from "./components/Cart/Cart";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Main />
        <Footer />
      </Router>
      <Cart />
    </>
  );
}

export default App;
