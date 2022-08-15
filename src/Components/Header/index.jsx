import React from "react";
import * as Styled from "./styled";
import theme from "../Global/variables";
import Wrapper from "../Layout/wrapper";

import Logo from "../Logo";
import Navigation from "../Navigation";
import { LinkWrap } from "../Global/Elements/link";

const Header = () => {
  return (
    <Styled.Header>
      <Wrapper>
        <LinkWrap href="/" title="Home">
          <Logo background={"transparent"} color={theme.white} />
        </LinkWrap>
        <Navigation />
      </Wrapper>
    </Styled.Header>
  );
};

export default Header;
