import { useSelector } from "react-redux";

import { MovieList } from "@/entities/movie/ui/MovieList";
import { MovieListSkeleton } from "@/entities/movie/ui/MovieListSkeleton";
import { useGetFavoritesQuery } from "@/features/favorites/api/favoritesApi";
import type { RootState } from "@/app/store";

const WatchListPage = () => {
  const userId = useSelector((state: RootState) => state.auth.user?.uid);
  const { data: movies, isLoading } = useGetFavoritesQuery(userId!, {
    skip: !userId,
  });

  if (isLoading) {
    return <MovieListSkeleton count={12} />;
  }

  if (!movies || movies.length === 0) {
    return (
      <div className="container text-center text-2xl mt-10">
        <h1 className="text-white">Нет фильмов</h1>
      </div>
    );
  }

  return (
    <MovieList title="Избранные фильмы" items={movies} isAnimated={true} />
  );
};

export default WatchListPage;
