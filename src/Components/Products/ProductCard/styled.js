import styled from "styled-components";
import { device } from "../../Global/devices";
import theme from "../../Global/variables";

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  width: 100%;

  @media ${device.tablet} {
    margin: 0 5px;
    width: calc(50% - 10px);
  }

  @media ${device.laptop} {
    width: calc(100% / 3 - 10px);
  }
`;

export const ImagContainer = styled.div`
  padding: 40px 20px;
  position: relative;

  img {
    height: 100px;
    width: auto;
    display: block;
    margin: 0 auto;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 20px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  background-color: ${theme.blue300};
  color: ${theme.white};
  font-weight: bold;
  line-height: 50px;
  text-align: center;
  transition: background-color 0.35s ease;
  width: calc(50% - 5px);

  &:hover {
    background-color: ${theme.blue200};
    transition: background-color 0.35s ease;
  }
`;

export const Price = styled.div`
  font-weight: bold;
  margin-bottom: 20px;
`;
