import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { auth } from "@/app/firebase/firebase";
import type { AuthCredentials, AuthError } from "../model/types";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fakeBaseQuery<AuthError>(),

  endpoints: (builder) => ({
    register: builder.mutation<void, AuthCredentials>({
      async queryFn({ email, password }) {
        try {
          await createUserWithEmailAndPassword(auth, email, password);
          return { data: undefined };
        } catch (error) {
          const err = error as { code?: string; message?: string };

          return {
            error: {
              code: err.code ?? "UNKNOWN_ERROR",
              message: err.message ?? "Unknown error",
            },
          };
        }
      },
    }),

    login: builder.mutation<void, AuthCredentials>({
      async queryFn({ email, password }) {
        try {
          await signInWithEmailAndPassword(auth, email, password);
          return { data: undefined };
        } catch (error) {
          const err = error as { code?: string; message?: string };

          return {
            error: {
              code: err.code ?? "UNKNOWN_ERROR",
              message: err.message ?? "Unknown error",
            },
          };
        }
      },
    }),

    logout: builder.mutation<void, void>({
      async queryFn() {
        try {
          await signOut(auth);
          return { data: undefined };
        } catch (error) {
          const err = error as { code?: string; message?: string };

          return {
            error: {
              code: err.code ?? "UNKNOWN_ERROR",
              message: err.message ?? "Unknown error",
            },
          };
        }
      },
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useLogoutMutation } =
  authApi;
