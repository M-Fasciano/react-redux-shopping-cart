import axios from "axios";
import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
} from "./productsTypes";

export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(fetchProductsRequest());

    // start api call to get the list of products
    return axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        // data is the list of modals
        const { data } = response;

        dispatch(fetchProductsSuccess(data));

        return data;
      })
      .catch((error) => {
        dispatch(fetchProductsFailure(error.message));
        return error;
      });
  };
};

export const fetchProductsRequest = () => {
  return {
    type: FETCH_PRODUCTS_REQUEST,
  };
};

export const fetchProductsSuccess = (products) => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products,
  };
};

export const fetchProductsFailure = (error) => {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    payload: error,
  };
};
