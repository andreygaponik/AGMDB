import type { Movie } from "@/app/api/types";
import { MoviePoster } from "./MoviePoster";
import { FavoriteButton } from "@/features/favorites/ui/FavoriteButton";
import { Link } from "react-router-dom";

interface MovieCardProps {
  movie: Movie;
  user: {
    uid: string;
    email: string | null;
  } | null;
}

export const MovieCard = (props: MovieCardProps) => {
  const { nameRu, posterUrlPreview, ratingKinopoisk, kinopoiskId } =
    props.movie;

  return (
    <>
      <div className="rounded hover:shadow-2xl relative transition p-2">
        <FavoriteButton
          movie={props.movie}
          userId={props.user?.uid ?? null}
          mode="mode1"
        />
        <Link to={`/movie/${kinopoiskId}`}>
          <MoviePoster
            src={posterUrlPreview}
            alt={nameRu}
            className="rounded-lg 2xl:h-85 xl:h-72 h-80 object-cover w-full"
          />
          <span className="rating bg-red-700 p-1 absolute top-4 right-4 w-10 block text-center rounded-sm">
            {ratingKinopoisk}
          </span>
          <h3 className="text-lg mt-2 text-center ">{nameRu}</h3>
        </Link>
      </div>
    </>
  );
};
