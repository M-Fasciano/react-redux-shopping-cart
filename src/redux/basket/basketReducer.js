import {
  ADD_TO_BASKET,
  REMOVE_FROM_BASKET,
  DECREASE_QUANTITY,
  CLEAR_BASKET,
} from "./basketTypes";

const initialState = {
  itemsCount: 0,
  basketItems: [],
  basketTotalAmount: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      const { id, image, price, title, quantity } = action.payload;

      // search if item is already in basket by item id
      const inBasket = state.basketItems.some((item) => item.id === id);

      if (inBasket) {
        // already in basket, shallow copy basket items
        return {
          ...state,
          basketItems: state.basketItems.map((item) =>
            item.id === id
              ? {
                  // found item, shallow copy item and update quantity property
                  ...item,
                  quantity: item.quantity + 1,
                }
              : item
          ),
        };
      } else {
        return {
          ...state,
          basketItems: [
            // shallow copy basket items
            ...state.basketItems,
            // add new basket item
            {
              id,
              quantity,
              title,
              image,
              price,
            },
          ],
        };
      }
    case REMOVE_FROM_BASKET:
      return {
        ...state,
        basketItems: state.basketItems.filter(
          (item) => item.id !== action.payload
        ),
      };
    case DECREASE_QUANTITY:
      return {
        ...state,
        basketItems: state.basketItems.map((item) =>
          item.id === action.payload
            ? {
                ...item,
                quantity: item.quantity !== 1 ? item.quantity - 1 : 1,
              }
            : item
        ),
      };
    case CLEAR_BASKET:
      return {
        ...state,
        basketItems: [],
      };
    default:
      return state;
  }
};

export default reducer;
