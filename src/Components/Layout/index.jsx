import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import MainWrapper from "./main-wrapper";
import GlobalStyle from "../../Components/Global/CSS";

const Layout = ({ children }) => {
  return (
    <MainWrapper>
      <GlobalStyle />
      <Header />
      {children}
      <Footer />
    </MainWrapper>
  );
};

export default Layout;
