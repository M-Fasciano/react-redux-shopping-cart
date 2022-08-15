import styled from "styled-components";
import theme from "../../Components/Global/variables";

export const BasketList = styled.ul`
  width: 100%;
`;

export const ButtonWrapper = styled.div`
  text-align: right;
`;

export const Button = styled.button`
  background-color: ${theme.blue300};
  border-radius: 5px;
  color: ${theme.white};
  font-weight: bold;
  line-height: 40px;
  margin-left: auto;
  padding: 0 20px;
  text-align: center;
  transition: background-color 0.35s ease;
  width: auto;

  &:hover {
    background-color: ${theme.blue200};
    transition: background-color 0.35s ease;
  }
`;
