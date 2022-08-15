import React from "react";
import { useSelector } from "react-redux";
import * as Styled from "./styled";

const Total = () => {
  const basket = useSelector((state) => state.basket.basketItems);

  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    basket.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });
    return { totalPrice, totalQuantity };
  };

  return (
    <Styled.Total>
      <h2>ORDER SUMMARY</h2>
      <div>
        <p className="total__p">
          total ({getTotal().totalQuantity} items) :{" "}
          <strong>£{getTotal().totalPrice.toFixed(2)}</strong>
        </p>
      </div>
    </Styled.Total>
  );
};

export default Total;
