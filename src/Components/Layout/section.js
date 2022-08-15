import * as React from "react";
import styled from "styled-components";

const SectionWrapper = styled.section`
  margin: 100px 0;
`;
const section = (props) => <SectionWrapper>{props.children}</SectionWrapper>;

export default section;
