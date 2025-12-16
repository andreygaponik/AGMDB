import { useTop250Movies } from "@/features/movies/hooks/useTop250Movies";
import { useTop250tvShows } from "@/features/movies/hooks/useTop250tvShows";
import { useKidsAnimationTheme } from "@/features/movies/hooks/useKidsAnimationTheme";

import type { Movie } from "@/app/api/types";
import { MovieList } from "@/entities/movie/ui/MovieList";

const MainPage = () => {
  const { moviesData, moviesLoading, moviesError } = useTop250Movies(1);
  const { tvShowsData, tvShowsLoading, tvShowsError } = useTop250tvShows(1);
  const { kidsAnimationData, kidsAnimationLoading, kidsAnimationError } =
    useKidsAnimationTheme(1);

  if (moviesLoading || tvShowsLoading || kidsAnimationLoading)
    return <div>Загрузка...</div>;
  if (moviesError || tvShowsError || kidsAnimationError)
    return <div>Ошибка при загрузке</div>;

  const movies: Movie[] = moviesData?.items || [];
  const tvShows: Movie[] = tvShowsData?.items || [];
  const kidsAnimation: Movie[] = kidsAnimationData?.items || [];

  console.log("movies", movies);
  console.log("tvShows", tvShows);
  console.log("kidsAnimation", kidsAnimation);

  return (
    <div className="mainPage">
      <MovieList title="Популярные фильмы" items={movies} />
      <hr />
      <MovieList title="Популярные сериалы" items={tvShows} />
      <hr />
      <MovieList title="Мультфильмы" items={kidsAnimation} />
    </div>
  );
};

export default MainPage;
