import styled from "styled-components";
import { device } from "../Global/devices";

export const NavList = styled.ul`
  color: white;
  display: none;

  @media ${device.laptop} {
    display: inline-flex;
  }
`;
