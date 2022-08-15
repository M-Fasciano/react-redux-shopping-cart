import { createGlobalStyle } from "styled-components";
import { Normalize } from "./_normalize";
import { Reset } from "./_reset";
import { BoxSizing } from "./_box-sizing";
import { Shared } from "./_shared";
import { TopLevel } from "./_top-level";

const GlobalStyles = createGlobalStyle`
  ${Normalize}
  ${Reset}
  ${BoxSizing}
  ${Shared}
  ${TopLevel}
`;

export default GlobalStyles;
