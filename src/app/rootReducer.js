import { combineReducers } from "redux";
import basketReducer from "../redux/basket/basketReducer";
import productsReducer from "../redux/products/productsReducer";

const rootReducer = combineReducers({
  basket: basketReducer,
  products: productsReducer,
});

export default rootReducer;
