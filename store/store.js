import { configureStore } from "@reduxjs/toolkit";
import reactotron from "../ReactotronConfig";
import favoritesReducer from "./slices/favoritesSlice";
import notificationsReducer from "./slices/notificationsSlice";
import cartReducer from "./slices/cartSlice";
import { favoritesApi } from "./api/favoritesApi";
import { notificationsApi } from "./api/notificationsApi";

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    notifications: notificationsReducer,
    cart: cartReducer,
    [favoritesApi.reducerPath]: favoritesApi.reducer,
    [notificationsApi.reducerPath]: notificationsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(favoritesApi.middleware)
      .concat(notificationsApi.middleware),
  enhancers: (getDefaultEnhancers) =>
    getDefaultEnhancers().concat(reactotron.createEnhancer()),
});
