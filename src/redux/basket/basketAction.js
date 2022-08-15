import {
  ADD_TO_BASKET,
  REMOVE_FROM_BASKET,
  DECREASE_QUANTITY,
  CLEAR_BASKET,
} from "./basketTypes";

export const addToBasket = (payload) => {
  return {
    type: ADD_TO_BASKET,
    payload,
  };
};

export const removeFromBasket = (payload) => {
  return {
    type: REMOVE_FROM_BASKET,
    payload,
  };
};

export const decreaseQuantity = (payload) => {
  return {
    type: DECREASE_QUANTITY,
    payload,
  };
};

export const clearBasket = () => {
  return {
    type: CLEAR_BASKET,
  };
};
