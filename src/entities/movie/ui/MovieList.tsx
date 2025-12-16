import type { Movie } from "@/app/api/types";
import { MovieItem } from "./MovieItem";

interface MovieListProps {
  title: string;
  items: Movie[];
}

export const MovieList = (props: MovieListProps) => {
  const { title, items } = props;
  console.log(items);

  return (
    <section className="movies-list">
      <div className="container">
        <h2>{title}</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {items.map((movie) => (
            <MovieItem key={movie.kinopoiskId} movie={movie} />
          ))}
        </div>
      </div>
    </section>
  );
};
