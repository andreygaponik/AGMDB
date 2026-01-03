import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { MovieCard } from "./MovieCard";
import { kinopoiskapiunofficial } from "@/app/api/kinopoiskapiunofficial";
import {
  favoritesApi,
  useGetFavoritesQuery,
} from "@/features/favorites/api/favoritesApi";
import { authReducer } from "@/features/auth/model/authSlice";
import { themeReducer } from "@/features/theme/themeSlice";

vi.mock("@/features/favorites/api/favoritesApi", async (importActual) => {
  const actual =
    await importActual<
      typeof import("@/features/favorites/api/favoritesApi")
    >();

  return {
    ...actual,
    useGetFavoritesQuery: vi.fn(),
    useAddFavoriteMutation: vi.fn(() => [vi.fn()]),
    useRemoveFavoriteMutation: vi.fn(() => [vi.fn()]),
  };
});

const mockMovie = {
  kinopoiskId: 435,
  nameRu: "Зеленая миля",
  countries: [],
  coverUrl: "",
  description: "",
  genres: [],
  imdbId: "",
  logoUrl: "",
  nameEn: "",
  nameOriginal: "",
  posterUrl: "url/to/poster.jpg",
  posterUrlPreview: "",
  ratingAgeLimits: "",
  ratingImdb: 0,
  ratingKinopoisk: 9.1,
  type: "",
  year: 2023,
};

const mockUser = { uid: "123", email: "test@test.com" };

describe("Movie", () => {
  beforeEach(() => {
    vi.resetAllMocks();
    vi.mocked(useGetFavoritesQuery).mockReturnValue({
      data: [],
      isLoading: false,
    } as any);
  });

  const renderMovieCard = () => {
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

    render(<MovieCard movie={mockMovie} user={mockUser} />, {
      wrapper: ({ children }) => (
        <Provider store={testStore}>
          <MemoryRouter>{children}</MemoryRouter>
        </Provider>
      ),
    });
  };

  it("должен корректно отображать информацию о фильме", () => {
    renderMovieCard();

    expect(screen.getByText("Зеленая миля")).toBeInTheDocument();
    expect(screen.getByText("9.1")).toBeInTheDocument();
    expect(screen.getByAltText("Зеленая миля")).toBeInTheDocument();
  });

  it("должен содержать корректную ссылку на страницу фильма", () => {
    renderMovieCard();

    const link = screen.getByRole("link");

    expect(link).toHaveAttribute("href", `/movie/${mockMovie.kinopoiskId}`);
  });
});
