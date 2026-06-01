import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.EXPO_PUBLIC_AUTH_URL,
  }),
  endpoints: (builder) => ({
    sign: builder.mutation({
      query: ({ email, password, endpoint }) => ({
        url: `:${endpoint}?key=${process.env.EXPO_PUBLIC_FIREBASE_API_KEY}`,
        method: "POST",
        body: {
          email,
          password,
          returnSecureToken: true,
        },
      }),
    }),
    refreshToken: builder.mutation({
      query: (refreshToken) => ({
        url:
          process.env.EXPO_PUBLIC_FIREBASE_TOKEN_URL +
          process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
        method: "POST",
        body: {
          grant_type: "refresh_topken",
          refresh_token: refreshToken,
        },
      }),
    }),
  }),
});

export const { useSignMutation, useRefreshTokenMutation } = authApi;
