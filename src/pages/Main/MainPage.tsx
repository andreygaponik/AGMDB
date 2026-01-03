import { useTop250Movies } from "@/features/movies/hooks/useTop250Movies";
import { useTop250tvShows } from "@/features/movies/hooks/useTop250tvShows";
import { useKidsAnimationTheme } from "@/features/movies/hooks/useKidsAnimationTheme";

import type { Movie } from "@/app/api/types";

import { MovieList } from "@/entities/movie/ui/MovieList";
import { MovieListSkeleton } from "@/entities/movie/ui/MovieListSkeleton";

const MainPage = () => {
  const { moviesData, moviesLoading, moviesError } = useTop250Movies(1);
  const { tvShowsData, tvShowsLoading, tvShowsError } = useTop250tvShows(1);
  const { kidsAnimationData, kidsAnimationLoading, kidsAnimationError } =
    useKidsAnimationTheme(1);

  if (moviesLoading || tvShowsLoading || kidsAnimationLoading)
    return <MovieListSkeleton count={20} />;

  if (moviesError || tvShowsError || kidsAnimationError)
    return (
      <div className="container mt-10 text-center text-2xl">
        <h1 className="text-white">Произошла ошибка при загрузке фильмов.</h1>
      </div>
    );

  const movies: Movie[] = moviesData?.items || [];
  const tvShows: Movie[] = tvShowsData?.items || [];
  const kidsAnimation: Movie[] = kidsAnimationData?.items || [];

  return (
    <div className="mainPage">
      <MovieList title="Популярные фильмы" items={movies} />
      <MovieList title="Популярные сериалы" items={tvShows} />
      <MovieList title="Мультфильмы" items={kidsAnimation} />
    </div>
  );
};

export default MainPage;
