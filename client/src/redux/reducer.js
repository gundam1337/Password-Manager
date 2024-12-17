import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  name: "",
  email: "",
  passwords: [],
};

const authSlice = createSlice({
  name: "auth", // Slice name
  initialState, // Initial state
  reducers: {
    setAuth(state, action) {
      state.isAuthenticated = action.payload;
    },
    setName(state, action) {
      state.name = action.payload;
    },
    setEmail(state, action) {
      state.email = action.payload;
    },
    setPasswords(state, action) {
      state.passwords = action.payload;
    },
    delPass(state, action) {
      state.passwords = state.passwords.filter(
        (password) => password._id !== action.payload
      );
    },
  },
});

export const { setAuth, setName, setEmail, setPasswords, delPass } =
  authSlice.actions; // Export actions
export default authSlice.reducer; // Export reducer
