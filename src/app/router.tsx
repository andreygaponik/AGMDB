import { createBrowserRouter } from "react-router-dom";

import MainLayout from "@/app/layouts/MainLayout";
import AuthLayout from "@/app/layouts/AuthLayout";

import MainPage from "@/pages/Main/MainPage";
import MoviesPage from "@/pages/Movies/MoviesPage";
import SeriesPage from "@/pages/Series/SeriesPage";
import WatchListPage from "@/pages/WatchList/WatchListPage";
import RegisterPage from "@/pages/Register/RegisterPage";
import LoginPage from "@/pages/Login/Login";
import MoviePage from "@/pages/Movie/MoviePage";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <MainPage /> },
      { path: "/movies", element: <MoviesPage /> },
      { path: "/series", element: <SeriesPage /> },
      { path: "/watchlist", element: <WatchListPage /> },
      { path: "/movie/:id", element: <MoviePage /> },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      { path: "/login", element: <LoginPage /> },
      { path: "/registration", element: <RegisterPage /> },
    ],
  },
]);
