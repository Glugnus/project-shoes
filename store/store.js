import { configureStore } from "@reduxjs/toolkit";
import reactotron from "../ReactotronConfig";
import favoritesReducer from "./slices/favoritesSlice";
import notificationsReducer from "./slices/notificationsSlice";
import cartReducer from "./slices/cartSlice";
import { favoritesApi } from "./api/favoritesApi";
import { notificationsApi } from "./api/notificationsApi";
import { userApi } from "./api/userApi";
import { useReducer } from "react";
import userReducer from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    notifications: notificationsReducer,
    cart: cartReducer,
    user: userReducer,
    [favoritesApi.reducerPath]: favoritesApi.reducer,
    [notificationsApi.reducerPath]: notificationsApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(favoritesApi.middleware)
      .concat(notificationsApi.middleware)
      .concat(userApi.middleware),
  enhancers: (getDefaultEnhancers) =>
    getDefaultEnhancers().concat(reactotron.createEnhancer()),
});
