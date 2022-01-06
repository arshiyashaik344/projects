import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer } from "./ProductReducers";
const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
});
export default reducers;
