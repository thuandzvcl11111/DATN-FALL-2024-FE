import { createSlice } from "@reduxjs/toolkit";
export const CartSlice = createSlice({
  name: "Cart",
  initialState: { addToCart: false, data: null},
  // initialState: { daDangNhap: false, user: null, expiresIn: 0 },
  reducers: {
   
    addCart: (state, param) => {
        // state.token = param.payload.token;
        state.data = param.payload.data;
        state.addToCart = true;
      // console.log("Đã ghi nhận state đăng nhập", state.token);
    },
  },
});
export const { addCart } = CartSlice.actions;
export default CartSlice.reducer;