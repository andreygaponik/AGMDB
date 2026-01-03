import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";

import MoviesPage from "./MoviesPage";
import { useTop250Movies } from "@/features/movies/hooks/useTop250Movies";

import { kinopoiskapiunofficial } from "@/app/api/kinopoiskapiunofficial";
import { favoritesApi } from "@/features/favorites/api/favoritesApi";
import { authReducer } from "@/features/auth/model/authSlice";
import { themeReducer } from "@/features/theme/themeSlice";

vi.mock("@/features/movies/hooks/useTop250Movies");
vi.mock("@/features/favorites/api/favoritesApi", async (importActual) => {
  const actual =
    await importActual<
      typeof import("@/features/favorites/api/favoritesApi")
    >();
  return { ...actual, useGetFavoritesQuery: vi.fn(() => ({ data: [] })) };
});

const mockUseTop250Movies = vi.mocked(useTop250Movies);

describe("MoviesPage", () => {
  const testStore = configureStore({
    reducer: {
      [kinopoiskapiunofficial.reducerPath]: kinopoiskapiunofficial.reducer,
      [favoritesApi.reducerPath]: favoritesApi.reducer,
      auth: authReducer,
      theme: themeReducer,
    },
    middleware: (gDM) =>
      gDM().concat(kinopoiskapiunofficial.middleware, favoritesApi.middleware),
  });

  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("должен отображать скелетон во время загрузки", () => {
    mockUseTop250Movies.mockReturnValue({
      moviesLoading: true,
      moviesData: undefined,
      moviesError: undefined,
    });

    render(
      <Provider store={testStore}>
        <MemoryRouter>
          <MoviesPage />
        </MemoryRouter>
      </Provider>,
    );

    const skeleton = document.querySelector(".animate-pulse");
    expect(skeleton).toBeInTheDocument();
  });

  it("должен отображать сообщение об ошибке при ошибке загрузки", () => {
    mockUseTop250Movies.mockReturnValue({
      moviesLoading: false,
      moviesData: undefined,
      moviesError: { status: "CUSTOM_ERROR", error: "Test error" },
    });

    render(
      <Provider store={testStore}>
        <MemoryRouter>
          <MoviesPage />
        </MemoryRouter>
      </Provider>,
    );

    expect(screen.getByText(/Произошла ошибка/i)).toBeInTheDocument();
  });

  it("должен отображать список фильмов и пагинацию при успешной загрузке", () => {
    const mockData = {
      totalPages: 2,
      items: [
        { kinopoiskId: 1, nameRu: "Фильм 1" },
        { kinopoiskId: 2, nameRu: "Фильм 2" },
      ],
    };
    mockUseTop250Movies.mockReturnValue({
      moviesLoading: false,
      moviesData: mockData as any,
      moviesError: undefined,
    });

    render(
      <Provider store={testStore}>
        <MemoryRouter>
          <MoviesPage />
        </MemoryRouter>
      </Provider>,
    );

    expect(screen.getByText("Фильм 1")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Вперед" })).toBeInTheDocument();
  });
});
