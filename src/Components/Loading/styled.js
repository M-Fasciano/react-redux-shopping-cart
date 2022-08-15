import styled, { keyframes } from "styled-components";
import theme from "../Global/variables";

const spinner = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div`
  display: block;
  width: 100%;
  height: 150px;
  line-height: 150px;
  text-align: center;

  &::after {
    display: inline-block;
    position: relative;
    text-align: center;
    vertical-align: middle;
    content: "";
    width: 50px;
    height: 50px;
    border-radius: 100px;
    border: 2px solid transparent;
    border-right-color: ${theme.black};
    animation: ${spinner} 600ms linear infinite;
  }
`;
