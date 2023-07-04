import { configureStore } from "@reduxjs/toolkit";
import userSlice from './slices/userSlice';
import favSlice from "./slices/favSlice";

const store = configureStore({
  reducer: {
    auth:userSlice,
    fav: favSlice,
  },
});

export default store;
