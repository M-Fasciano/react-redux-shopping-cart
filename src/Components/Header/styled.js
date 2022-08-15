import styled from "styled-components";
import theme from "../Global/variables";
import { WrapperFrame } from "../Layout/wrapper";
import { LogoWrapper } from "../Logo/styled";

export const Header = styled.header`
  background-color: ${theme.blackTransparent};
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;

  ${LogoWrapper} {
    padding: 10px 0;
  }

  ${WrapperFrame} {
    display: flex;
    align-items: center;
  }
`;
