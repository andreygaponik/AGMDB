import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";

import { FavoriteButton } from "./FavoriteButton";

import { favoritesApi, useGetFavoritesQuery } from "../api/favoritesApi";
import { authReducer } from "../../auth/model/authSlice";
import { themeReducer } from "../../theme/themeSlice";
import { kinopoiskapiunofficial } from "@/app/api/kinopoiskapiunofficial";

vi.mock("../api/favoritesApi", async (importActual) => {
  const actual = await importActual<typeof import("../api/favoritesApi")>();

  return {
    ...actual,
    useGetFavoritesQuery: vi.fn(),
  };
});

const mockMovie = {
  kinopoiskId: 123,
  nameRu: "Тестовый фильм",
  countries: [],
  coverUrl: "",
  description: "",
  genres: [],
  imdbId: "",
  logoUrl: "",
  nameEn: "",
  nameOriginal: "",
  posterUrl: "",
  posterUrlPreview: "",
  ratingAgeLimits: "",
  ratingImdb: 0,
  ratingKinopoisk: 0,
  type: "",
  year: 2023,
};

describe("FavoriteButton", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("должен отображать пустую иконку сердца, если фильм не в избранном", () => {
    vi.mocked(useGetFavoritesQuery).mockReturnValue({
      data: [],
      isLoading: false,
    } as any);

    const testStore = configureStore({
      reducer: {
        [kinopoiskapiunofficial.reducerPath]: kinopoiskapiunofficial.reducer,
        [favoritesApi.reducerPath]: favoritesApi.reducer,
        auth: authReducer,
        theme: themeReducer,
      },
      middleware: (gDM) =>
        gDM().concat(
          kinopoiskapiunofficial.middleware,
          favoritesApi.middleware,
        ),
    });

    render(
      <FavoriteButton movie={mockMovie} userId="test-user" mode="mode1" />,
      {
        wrapper: ({ children }) => (
          <Provider store={testStore}>
            <MemoryRouter>{children}</MemoryRouter>
          </Provider>
        ),
      },
    );

    expect(screen.getByTestId("empty-heart")).toBeInTheDocument();
    expect(screen.queryByTestId("filled-heart")).not.toBeInTheDocument();
  });

  it("должен отображать закрашенную иконку сердца, если фильм в избранном", async () => {
    vi.mocked(useGetFavoritesQuery).mockReturnValue({
      data: [mockMovie],
      isLoading: false,
    } as any);

    const testStore = configureStore({
      reducer: {
        [kinopoiskapiunofficial.reducerPath]: kinopoiskapiunofficial.reducer,
        [favoritesApi.reducerPath]: favoritesApi.reducer,
        auth: authReducer,
        theme: themeReducer,
      },
      middleware: (gDM) =>
        gDM().concat(
          kinopoiskapiunofficial.middleware,
          favoritesApi.middleware,
        ),
    });

    render(
      <FavoriteButton movie={mockMovie} userId="test-user" mode="mode1" />,
      {
        wrapper: ({ children }) => (
          <Provider store={testStore}>
            <MemoryRouter>{children}</MemoryRouter>
          </Provider>
        ),
      },
    );

    const filledHeartIcon = await screen.findByTestId("filled-heart");

    expect(filledHeartIcon).toBeInTheDocument();
    expect(screen.queryByTestId("empty-heart")).not.toBeInTheDocument();
  });
});
