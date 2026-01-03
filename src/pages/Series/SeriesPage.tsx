import { MovieList } from "@/entities/movie/ui/MovieList";
import { MovieListSkeleton } from "@/entities/movie/ui/MovieListSkeleton";
import { Pagination } from "@/shared/ui/Pagination/Pagination";
import { useSearchParams } from "react-router-dom";

import type { Movie } from "@/app/api/types";
import { useTop250tvShows } from "@/features/movies/hooks/useTop250tvShows";

const Series = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const { tvShowsData, tvShowsLoading, tvShowsError } =
    useTop250tvShows(currentPage);

  const handlePageChange = (page: number) => {
    setSearchParams({
      page: String(page),
    });
    window.scrollTo(0, 0);
  };

  if (tvShowsLoading) return <MovieListSkeleton count={20} />;

  if (tvShowsError || !tvShowsData) {
    return (
      <div className="container mt-10 text-center text-2xl">
        <h1 className="text-white">Произошла ошибка при загрузке фильмов.</h1>
      </div>
    );
  }

  const movies: Movie[] = tvShowsData?.items || [];

  return (
    <div>
      <MovieList title="Популярные сериалы" items={movies} />

      <Pagination
        currentPage={currentPage}
        totalPages={tvShowsData.totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Series;
