import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import type { Movie, MoviesResponse } from "./types";

const API_TOKEN = import.meta.env.VITE_KINOPOISK_API_KEY;

export const kinopoiskapiunofficial = createApi({
  reducerPath: "kinopoiskapiunofficial",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://kinopoiskapiunofficial.tech/api/v2.2/films/",
    prepareHeaders: (headers) => {
      headers.set("X-API-KEY", API_TOKEN);
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTop250Movies: builder.query<MoviesResponse, number>({
      query: (page = 1) => ({
        url: "collections",
        params: {
          page,
          type: "TOP_250_MOVIES",
        },
      }),
    }),

    getTop250tvShows: builder.query<MoviesResponse, number>({
      query: (page = 1) => ({
        url: "collections",
        params: {
          page,
          type: "TOP_250_TV_SHOWS",
        },
      }),
    }),

    getKidsAnimationTheme: builder.query<MoviesResponse, number>({
      query: (page = 1) => ({
        url: "collections",
        params: {
          page,
          type: "KIDS_ANIMATION_THEME",
        },
      }),
    }),

    getMovieById: builder.query<Movie, string>({
      query: (id) => id,
    }),
  }),
});

export const {
  useGetTop250MoviesQuery,
  useGetTop250tvShowsQuery,
  useGetKidsAnimationThemeQuery,
  useGetMovieByIdQuery,
} = kinopoiskapiunofficial;
