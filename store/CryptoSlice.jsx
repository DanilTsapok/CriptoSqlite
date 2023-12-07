import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  crypto: [],
};
export const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {
    checkCrypto: (state, action) => {
      const idx = state.crypto.findIndex(
        (crypto) => crypto.id == action.payload
      );
      state.crypto[idx].checked = true;
    },
    setCryptos: (state, action) => {
      state.crypto = action.payload;
    },
    buyCrypto: (state) => {
      state.crypto = state.crypto.map((crypto) => ({
        ...crypto,
        amount: 0,
        checked: false,
      }));
    },
    unCheckCrypto: (state, action) => {
      const idx = state.crypto.findIndex(
        (crypto) => crypto.id == action.payload
      );
      state.crypto[idx].checked = false;
      state.crypto[idx].amount = 0;
    },
    decrementCrypto: (state, action) => {
      const idx = state.crypto.findIndex(
        (crypto) => crypto.id == action.payload
      );
      if (state.crypto[idx].amountToBuy > 0) {
        state.crypto[idx].amountToBuy--;
      }
    },
    incrementCrypto: (state, action) => {
      const idx = state.crypto.findIndex(
        (crypto) => crypto.id == action.payload
      );
      state.crypto[idx].amount++;
    },
  },
});
const cryptoReducer = cryptoSlice.reducer;

export const {
  checkCrypto,
  buyCrypto,
  incrementCrypto,
  decrementCrypto,
  unCheckCrypto,
  setCryptos,
} = cryptoSlice.actions;
export default cryptoReducer;
