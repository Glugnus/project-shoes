import { configureStore } from "@reduxjs/toolkit";
import reactotron from "../ReactotronConfig";
import favoritesReducer from "./slices/favoritesSlice";
import notificationsReducer from "./slices/notificationsSlice";
import cartReducer from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    notifications: notificationsReducer,
    cart: cartReducer,
  },
  enhancers: (getDefaultEnhancers) =>
    getDefaultEnhancers().concat(reactotron.createEnhancer()),
});
