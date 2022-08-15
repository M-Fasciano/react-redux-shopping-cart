import React from "react";
import * as Styled from "./styled";
import {
  addToBasket,
  decreaseQuantity,
  removeFromBasket,
} from "../../redux/basket/basketAction";
import { useDispatch } from "react-redux";

const BasketItem = ({ id, image, title, price, quantity = 0 }) => {
  const dispatch = useDispatch();

  return (
    <Styled.BasketListItem>
      <div className="basket__list-item-image-wrapper">
        <img className="basket__list-item-image" src={image} alt={title} />
      </div>
      <div className="basket__list-item-info">
        <h2 className="basket__list-item-title">{title}</h2>
        <p className="basket__list-item-price">£{price}</p>
        <div className="basket__list-item-buttons">
          <button
            className="basket__list-item-btn"
            onClick={() => dispatch(decreaseQuantity(id))}
            aria-label="Decrease quantity"
          >
            -
          </button>
          <span className="basket__list-item-quantity">{quantity}</span>
          <button
            className="basket__list-item-btn"
            onClick={() =>
              dispatch(
                addToBasket({
                  id,
                  title,
                  image,
                  price,
                  quantity,
                })
              )
            }
            aria-label="Increase quantity"
          >
            +
          </button>
          <button
            className="basket__list-item-btn basket__list-item-btn--remove"
            onClick={() => dispatch(removeFromBasket(id))}
            aria-label="Remove product from cart"
          >
            Remove
          </button>
        </div>
      </div>
    </Styled.BasketListItem>
  );
};
export default BasketItem;
