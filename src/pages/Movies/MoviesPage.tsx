import { MovieList } from "@/entities/movie/ui/MovieList";
import { MovieListSkeleton } from "@/entities/movie/ui/MovieListSkeleton";
import { useTop250Movies } from "@/features/movies/hooks/useTop250Movies";
import { Pagination } from "@/shared/ui/Pagination/Pagination";
import { useSearchParams } from "react-router-dom";

import type { Movie } from "@/app/api/types";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const { moviesData, moviesLoading, moviesError } =
    useTop250Movies(currentPage);

  const handlePageChange = (page: number) => {
    setSearchParams({
      page: String(page),
    });
    window.scrollTo(0, 0);
  };

  if (moviesLoading) return <MovieListSkeleton count={20} />;

  if (moviesError || !moviesData) {
    return (
      <div className="container mt-10 text-center text-2xl">
        <h1 className="text-white">Произошла ошибка при загрузке фильмов.</h1>
      </div>
    );
  }

  const movies: Movie[] = moviesData?.items || [];

  return (
    <div>
      <MovieList title="Популярные фильмы" items={movies} />

      <Pagination
        currentPage={currentPage}
        totalPages={moviesData.totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default MoviesPage;
