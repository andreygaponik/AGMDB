import type { Movie } from "@/app/api/types";
import { MovieCard } from "./MovieCard";

interface MovieListProps {
  title: string;
  items: Movie[];
}

export const MovieList = (props: MovieListProps) => {
  const { title, items } = props;

  return (
    <section className="movies-list mb-14">
      <div className="container">
        <h2 className="text-2xl font-semibold mb-6">{title}</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-14">
          {items.map((movie) => (
            <MovieCard key={movie.kinopoiskId} movie={movie} />
          ))}
        </div>
      </div>
    </section>
  );
};
