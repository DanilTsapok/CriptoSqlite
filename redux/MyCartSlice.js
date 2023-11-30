import { createSlice } from "@reduxjs/toolkit";

const MyCartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addProductsToMyCart(state, action) {
      let myIndex = -1;
      state.map((item, index) => {
        if (item.id == action.payload.id) {
          myIndex = index;
        }
      });
      if (myIndex == -1) {
        state.push({
          id: action.payload.id,
          image: action.payload.image,
          name: action.payload.name,
          price: action.payload.price,
          qty: action.payload.qty + 1,
        });
      } else {
        state[myIndex].qty = state[myIndex].qty + 1;
      }
    },
    removeMyCartItem(state, action) {
      let myIndex = -1;
      state.map((item, index) => {
        if (item.id == action.payload.id) {
          myIndex = index;
        }
      });
      if (myIndex == -1) {
      } else {
        state[myIndex].qty = state[myIndex].qty - 1;
      }
    },
    deleteItem(state, action) {
      return (state = state.filter((item) => item.id != action.payload));
    },
  },
});

export const { addProductsToMyCart, removeMyCartItem, deleteItem } =
  MyCartSlice.actions;
export default MyCartSlice.reducer;
