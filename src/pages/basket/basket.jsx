import React from "react";
import * as Styled from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { WrapperFrame } from "../../Components/Layout/wrapper";
import Layout from "../../Components/Layout";
import SectionWrapper from "../../Components/Layout/section";
import BasketItem from "../../Components/BasketItem";
import Total from "../../Components/Total";
import { clearBasket } from "../../redux/basket/basketAction";

const Basket = () => {
  const basket = useSelector((state) => state.basket.basketItems);
  const dispatch = useDispatch();
  const hasItems = basket.length;

  console.log(hasItems);

  return (
    <Layout>
      <SectionWrapper>
        <WrapperFrame>
          <Total />
          <h1>Shopping Cart</h1>
          <Styled.BasketList>
            {basket.map((item) =>
              item["quantity"] >= 1 ? (
                <BasketItem
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  quantity={item.quantity}
                />
              ) : null
            )}
          </Styled.BasketList>
          {hasItems ? (
            <Styled.ButtonWrapper>
              <Styled.Button onClick={() => dispatch(clearBasket())}>
                Empty basket
              </Styled.Button>
            </Styled.ButtonWrapper>
          ) : null}
        </WrapperFrame>
      </SectionWrapper>
    </Layout>
  );
};

export default Basket;
