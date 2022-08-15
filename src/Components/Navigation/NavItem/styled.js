import styled from "styled-components";
import { LinkWrap } from "../../Global/Elements/link";

export const NavItem = styled.li`
  cursor: pointer;
  padding: 10px 0;
  text-transform: uppercase;
  min-width: 100px;
  text-align: center;
  transition: background-color 0.25s;

  :hover {
    background-color: #0aad8d;
  }

  ${LinkWrap} {
    padding: 20px;
  }
`;
