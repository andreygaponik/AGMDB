import { useParams } from "react-router-dom";
import { useGetMovieByIdQuery } from "@/app/api/kinopoiskapiunofficial";
import { useSelector } from "react-redux";
import type { RootState } from "@/app/store";
import { FavoriteButton } from "@/features/favorites/ui/FavoriteButton";

const MoviePage = () => {
  const { id } = useParams<{ id: string }>();
  const {
    data: movie,
    isLoading,
    isError,
  } = useGetMovieByIdQuery(id ?? "", { skip: !id });

  const user = useSelector((state: RootState) => state.auth.user);

  if (isLoading) {
    return (
      <div
        className="min-h-screen bg-gray-900 text-white p-8 flex
      items-center justify-center"
      >
        <h1 className="text-4xl font-bold">Загрузка...</h1>
      </div>
    );
  }

  if (isError || !movie) {
    return (
      <div
        className="min-h-screen bg-gray-900 text-white p-8 flex
      items-center justify-center"
      >
        <h1 className="text-4xl font-bold">Ошибка при загрузке фильма.</h1>
        <p>Попробуйте обновить страницу.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto bg-gray-800 rounded-lg shadow-lg overflow-hidden md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="w-full h-auto md:w-64 object-cover"
            src={movie.posterUrl || movie.posterUrlPreview}
            alt={movie.nameRu || movie.nameOriginal || "Постер фильма"}
          />
        </div>

        <div className="p-8 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2">
              {movie.nameRu || movie.nameOriginal}
            </h1>
            {movie.nameEn && (
              <p className="text-xl text-gray-400 mb-4">{movie.nameEn}</p>
            )}

            <div className="flex items-center space-x-4 mb-4">
              {movie.ratingKinopoisk && (
                <span className="bg-yellow-500 text-gray-900 text-sm font-bold px-3 py-1 rounded-full">
                  КП: {movie.ratingKinopoisk}
                </span>
              )}
              {movie.ratingImdb && (
                <span className="bg-blue-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                  IMDb: {movie.ratingImdb}
                </span>
              )}
            </div>

            <div className="space-y-2">
              <p className="text-gray-300">
                <strong className="font-semibold text-white">Год:</strong>{" "}
                {movie.year}
              </p>
              <p className="text-gray-300">
                <strong className="font-semibold text-white">Жанры:</strong>{" "}
                {movie.genres?.map((g) => g.genre).join(", ") || "Не указаны"}
              </p>
              <p className="text-gray-300">
                <strong className="font-semibold text-white">Страны:</strong>{" "}
                {movie.countries?.map((c) => c.country).join(", ") ||
                  "Не указаны"}
              </p>
              {movie.ratingAgeLimits && (
                <p className="text-gray-300">
                  <strong className="font-semibold text-white">
                    Возрастной рейтинг:
                  </strong>{" "}
                  {String(movie.ratingAgeLimits).replace("age", "")}+
                </p>
              )}
            </div>

            <h2 className="text-2xl font-semibold mt-6 mb-2">Описание</h2>
            <p className="text-gray-300 leading-relaxed">
              {movie.description || "Описание фильма отсутствует."}
            </p>
          </div>

          <div className="mt-8">
            {user && (
              <FavoriteButton
                movie={movie}
                userId={user?.uid ?? null}
                mode="mode2"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
