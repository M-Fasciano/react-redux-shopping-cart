import * as React from "react";
import styled from "styled-components";

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
  width: 100%;

  .grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
`;

const main = (props) => <MainWrapper>{props.children}</MainWrapper>;

export default main;
