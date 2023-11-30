import { createSlice } from "@reduxjs/toolkit";

const MyProductSlice = createSlice({
  name: "product",
  initialState: [],
  reducers: {
    addProducts(state, action) {
      state.push(action.payload);
    },
  },
});

export const { addProducts } = MyProductSlice.actions;
export default MyProductSlice.reducer;
