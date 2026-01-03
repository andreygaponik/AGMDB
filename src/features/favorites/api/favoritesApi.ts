import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
} from "firebase/firestore";

import { db } from "@/app/firebase/firebase";
import type { Movie } from "@/app/api/types";

export const favoritesApi = createApi({
  reducerPath: "favoritesApi",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["Favorites"],
  endpoints: (builder) => ({
    getFavorites: builder.query<Movie[], string>({
      async queryFn(userId) {
        try {
          const snapshot = await getDocs(
            collection(db, "users", userId, "favorites"),
          );
          const movies = snapshot.docs.map((doc) => doc.data() as Movie);
          return { data: movies };
        } catch (error) {
          console.error("Firebase read error:", error);
          return { error: error as any };
        }
      },
      providesTags: ["Favorites"],
    }),

    addFavorite: builder.mutation<void, { userId: string; movie: Movie }>({
      async queryFn({ userId, movie }) {
        try {
          await setDoc(
            doc(db, "users", userId, "favorites", String(movie.kinopoiskId)),
            movie,
          );
          return { data: undefined };
        } catch (error) {
          return { error };
        }
      },
      async onQueryStarted({ userId, movie }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          favoritesApi.util.updateQueryData("getFavorites", userId, (draft) => {
            draft.push(movie);
          }),
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
      invalidatesTags: ["Favorites"],
    }),

    removeFavorite: builder.mutation<void, { userId: string; movieId: number }>(
      {
        async queryFn({ userId, movieId }) {
          try {
            await deleteDoc(
              doc(db, "users", userId, "favorites", String(movieId)),
            );
            return { data: undefined };
          } catch (error) {
            return { error };
          }
        },
        async onQueryStarted(
          { userId, movieId },
          { dispatch, queryFulfilled },
        ) {
          const patchResult = dispatch(
            favoritesApi.util.updateQueryData(
              "getFavorites",
              userId,
              (draft) => {
                const index = draft.findIndex(
                  (movie) => movie.kinopoiskId === movieId,
                );
                if (index !== -1) {
                  draft.splice(index, 1);
                }
              },
            ),
          );
          try {
            await queryFulfilled;
          } catch {
            patchResult.undo();
          }
        },
        invalidatesTags: ["Favorites"],
      },
    ),
  }),
});

export const {
  useGetFavoritesQuery,
  useAddFavoriteMutation,
  useRemoveFavoriteMutation,
} = favoritesApi;
