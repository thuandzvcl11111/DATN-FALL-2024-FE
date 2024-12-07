import { createSlice } from "@reduxjs/toolkit";

// Lấy dữ liệu từ localStorage
const initialAuthState = {
  daDangNhap: !!localStorage.getItem("token"), // Kiểm tra token có tồn tại hay không
  user: JSON.parse(localStorage.getItem("user")) || null,
  token: localStorage.getItem("token") || null,
};

export const AuthSlice = createSlice({
  name: "Auth",
  initialState: initialAuthState, // Gán dữ liệu lấy từ localStorage
  reducers: {
    // Xử lý đăng xuất
    thoat: (state) => {
      state.token = null;
      state.user = null;
      state.daDangNhap = false;

      // Xóa dữ liệu khỏi localStorage
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.href = '/'
    },

    // Xử lý đăng nhập
    dalogin: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.daDangNhap = true;

      // Lưu vào localStorage
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      window.location.href = '/'
    },
  },
});

export const { dalogin, thoat } = AuthSlice.actions;
export default AuthSlice.reducer;