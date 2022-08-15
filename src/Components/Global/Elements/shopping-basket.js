import React from "react";
import styled from "styled-components";
import theme from "../variables";

const Basket = styled.button`
  align-items: center;
  background-color: ${theme.black};
  border-radius: 50%;
  color: ${theme.white};
  display: flex;
  height: 60px;
  justify-content: center;
  position: fixed;
  right: 30px;
  top: 40px;
  width: 60px;
  z-index: 110;

  p {
    background-color: ${theme.black};
    border-radius: 50%;
    height: 40px;
    line-height: 40px;
    font-size: 1.25rem;
    position: absolute;
    right: -10px;
    text-align: center;
    top: -20px;
    width: 40px;
  }

  img {
    filter: invert(1);
    width: 30px;
  }
`;

const ShoppingBasket = ({ children, onClick }) => {
  return <Basket onClick={onClick}>{children}</Basket>;
};

export default ShoppingBasket;
