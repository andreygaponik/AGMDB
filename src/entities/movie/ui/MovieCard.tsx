import type { Movie } from "@/app/api/types";
import { MoviePoster } from "./MoviePoster";

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard = (props: MovieCardProps) => {
  const { nameRu, posterUrlPreview, ratingKinopoisk } = props.movie;

  return (
    <>
      <div className="rounded hover:shadow-md relative transition">
        <MoviePoster
          src={posterUrlPreview}
          alt={nameRu}
          className="rounded-lg h-85"
        />
        <span className="bg-red-700 p-1 absolute top-1.5 right-1.5 w-10 block text-center rounded-sm">
          {ratingKinopoisk}
        </span>
        <h3 className="text-lg mt-2 text-center ">{nameRu}</h3>
      </div>
    </>
  );
};
