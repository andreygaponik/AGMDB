import type { Movie } from "@/app/api/types";

export interface FavoritesState {
  ids: number[];
}

export interface FavoriteButtonProps {
  movie: Movie;
  userId: string | null;
  mode: string;
}
