import { configureStore } from "@reduxjs/toolkit";
import dogsReducer from "./slice/dogSlice";
export const store = configureStore({
  reducer: {
    dogs: dogsReducer,
  },
});
