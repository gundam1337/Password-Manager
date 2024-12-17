import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducer"; // Import the new reducer

export const store = configureStore({
  reducer: {
    auth: authReducer, // Combine reducers here if needed
  },
});
