import styled from "styled-components";
import theme from "../Global/variables";

export const Total = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px 0;
  background: white;
  border-bottom: 1px solid ${theme.gray100};
  margin-bottom: 20px;

  > h2 {
    font-weight: 400;
  }

  .total__p {
    font-size: 20px;
    font-weight: 450;
  }

  .total > button:active {
    background-color: unset;
  }
`;
