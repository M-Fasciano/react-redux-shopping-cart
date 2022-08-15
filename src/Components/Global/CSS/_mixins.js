import { css } from "styled-components";
import { device } from "../breakpoints";
import { color } from "../variables";

export const primaryButton = css`
  background-color: ${color.paleBlue};
  border-radius: 3px;
  color: ${color.black};
  cursor: pointer;
  font-weight: bold;
  height: 48px;
  line-height: 48px;
  padding: 0;
  text-align: center;

  @media ${device.laptopS} {
    transition: background-color 0.35s ease, color 0.35s ease;

    &:hover {
      background-color: ${color.lightBlue};
      color: ${color.white};
      transition: background-color 0.35s ease, color 0.35s ease;
    }
  }
`;
