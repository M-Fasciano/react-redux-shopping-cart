import React from "react";
import * as Styled from "./styled";
import { navData } from "./data";
import NavItem from "./NavItem";
import theme from "../Global/variables";

const Navigation = () => {
  return (
    <nav>
      <Styled.NavList>
        {navData.map((value, index) => {
          const title = Object.keys(value)[0];
          const url = value[title];

          return (
            <NavItem key={index} title={title} href={url} color={theme.white}>
              {title}
            </NavItem>
          );
        })}
      </Styled.NavList>
    </nav>
  );
};

export default Navigation;
