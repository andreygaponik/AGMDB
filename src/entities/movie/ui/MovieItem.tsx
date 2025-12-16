import type { Movie } from "@/app/api/types";
import { MoviePoster } from "./MoviePoster";

interface MovieItemProps {
  movie: Movie;
}

export const MovieItem = (props: MovieItemProps) => {
  const { nameRu, posterUrlPreview } = props.movie;
  console.log(props);
  return (
    <div className="bg-gray-100 p-2 rounded shadow hover:shadow-md transition">
      <MoviePoster src={posterUrlPreview} alt={nameRu} />
      <h3 className="text-2xl mt-2 text-center ">{nameRu}</h3>
    </div>
  );
};
