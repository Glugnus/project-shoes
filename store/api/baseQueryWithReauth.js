import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import * as SecureStore from "expo-secure-store";
import { setToken, setUserId } from "../slices/authSlice";

const baseQuery = fetchBaseQuery({ baseUrl: process.env.EXPO_PUBLIC_API_URL });

export const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error?.status === 401) {
    const refeshToken = await SecureStore.getItemAsync("refeshToken");
    if (refeshToken) {
      const refreshResult = await baseQuery(
        {
          url:
            process.env.EXPO_PUBLIC_FIREBASE_TOKEN_URL +
            process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
          method: "POST",
          body: {
            grant_type: "refresh_topken",
            refresh_token: refreshToken,
          },
        },
        api,
        extraOptions,
      );
      if (refreshResult.data) {
        api.dispatch(setToken(refreshResult.data.id_token));
        SecureStore.setItemAsync(
          "refeshToken",
          refreshResult.data.refresh_token,
        );
        args.url =
          args.url.split("auth=")[0] + `auth=${refreshResult.data.id_token}`;
        result = await baseQuery(args, api, extraOptions);
      } else {
        api.dispatch(setToken());
        api.dispatch(setUserId());
        SecureStore.deleteItemAsync("refreshToken");
      }
    } else {
      api.dispatch(setToken());
      api.dispatch(setUserId());
    }
  }
  return result;
};
