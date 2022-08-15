import * as React from "react";
import styled from "styled-components";
import { device } from "../Global/devices";

export const WrapperFrame = styled.div`
  height: auto;
  margin: 0 auto;
  position: relative;
  padding: 0 1rem;

  @media ${device.laptop} {
    max-width: 1440px;
  }
`;

const wrapper = (props) => <WrapperFrame>{props.children}</WrapperFrame>;

export default wrapper;
