import React from "react";
import * as Styled from "./styled";
import theme from "../Global/variables";

import Logo from "../Logo";

const Footer = (props) => {
  return (
    <>
      <Styled.FooterWrapper>
        <Logo background={"transparent"} color={theme.white} />
      </Styled.FooterWrapper>
      <Styled.Copyright>
        &copy; Copyright {new Date().getFullYear()}. All rights reserved.
      </Styled.Copyright>
    </>
  );
};

export default Footer;
