import { configureStore } from "@reduxjs/toolkit";

import { kinopoiskapiunofficial } from "@/app/api/kinopoiskapiunofficial";

export const store = configureStore({
  reducer: {
    [kinopoiskapiunofficial.reducerPath]: kinopoiskapiunofficial.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(kinopoiskapiunofficial.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
