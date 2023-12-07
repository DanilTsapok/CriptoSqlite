import { configureStore } from "@reduxjs/toolkit";
import cryptoReducer from "./CryptoSlice";
const rootReducer = {
  cryptoReducer,
};

const store = configureStore({
  reducer: cryptoReducer,
});
export default store;
