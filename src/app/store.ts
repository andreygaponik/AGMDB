import { configureStore } from "@reduxjs/toolkit";

import { kinopoiskapiunofficial } from "@/app/api/kinopoiskapiunofficial";
import { authApi } from "@/features/auth/api/authApi";
import { authReducer } from "@/features/auth/model/authSlice";
import { themeReducer } from "@/features/theme/themeSlice";
import { favoritesApi } from "@/features/favorites/api/favoritesApi";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducer,
    theme: themeReducer,
    [favoritesApi.reducerPath]: favoritesApi.reducer,
    [kinopoiskapiunofficial.reducerPath]: kinopoiskapiunofficial.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      kinopoiskapiunofficial.middleware,
      authApi.middleware,
      favoritesApi.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
