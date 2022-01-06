import axios from "axios";
import { ActionTypes } from "../constants/action-types";

// export const setProducts = (products) => {
//   return {
//     type: ActionTypes.SET_PRODUCTS,
//     payload: products,
//   };
// };



export const setProducts = () => async dispatch => {
  const response = await axios.get('https://fakestoreapi.com/products').catch((err) => {
                      console.log('Error : ', err);
                    });

  dispatch({ type: ActionTypes.SET_PRODUCTS, payload: response.data });
};


export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
