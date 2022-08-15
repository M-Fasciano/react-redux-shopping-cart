import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import SectionWrapper from "../Components/Layout/section";
import Products from "../Components/Products";
import Layout from "../Components/Layout";
import ShoppingBasket from "../Components/Global/Elements/shopping-basket";
import basketIcon from "../assets/store_shopping_market_buy_shop_icon.svg";

const Home = () => {
  const navigate = useNavigate();
  const basket = useSelector((state) => state.basket.basketItems);

  const getTotalQuantity = () => {
    let total = 0;
    basket.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };

  const navigateToBasket = () => navigate("/basket");

  return (
    <Layout>
      <SectionWrapper>
        <Products />
      </SectionWrapper>
      <ShoppingBasket onClick={navigateToBasket}>
        <p>{getTotalQuantity() || 0}</p>
        <img src={basketIcon} alt="basket icon" />
      </ShoppingBasket>
    </Layout>
  );
};

export default Home;
