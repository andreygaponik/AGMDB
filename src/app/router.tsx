import { createBrowserRouter } from "react-router-dom";

import MainLayout from "@/app/layouts/MainLayout";

import MainPage from "@/pages/Main/MainPage";
import MoviesPage from "@/pages/Movies/MoviesPage";
import SeriesPage from "@/pages/Series/SeriesPage";
import WatchListPage from "@/pages/WatchList/WatchListPage";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <MainPage /> },
      { path: "/movies", element: <MoviesPage /> },
      { path: "/series", element: <SeriesPage /> },
      { path: "/watchlist", element: <WatchListPage /> },
    ],
  },
]);
