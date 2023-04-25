import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import styled from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Footer />
      </Router>
    </>
  );
}

export default App;
