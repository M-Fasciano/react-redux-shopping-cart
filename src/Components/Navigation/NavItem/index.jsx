import React from "react";
import * as Styled from "./styled";
import { LinkWrap } from "../../Global/Elements/link";

const NavItem = (props) => {
  return (
    <Styled.NavItem>
      <LinkWrap {...props} />
    </Styled.NavItem>
  );
};

export default NavItem;
