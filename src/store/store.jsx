import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice/productSlice";
const rootReducer = { productReducer };

const store = configureStore({
  reducer: productReducer,
});
export default store;
