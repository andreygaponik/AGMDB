import { motion } from "framer-motion";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import {
  useAddFavoriteMutation,
  useGetFavoritesQuery,
  useRemoveFavoriteMutation,
} from "../api/favoritesApi";

import type { FavoriteButtonProps } from "../model/types";

export const FavoriteButton = ({
  movie,
  userId,
  mode,
}: FavoriteButtonProps) => {
  const navigate = useNavigate();

  const { data: favoriteMovies = [] } = useGetFavoritesQuery(userId!, {
    skip: !userId,
  });
  const [addFavorite] = useAddFavoriteMutation();
  const [removeFavorite] = useRemoveFavoriteMutation();

  const isFavorite = favoriteMovies.some(
    (favMovie) => favMovie.kinopoiskId === movie.kinopoiskId,
  );

  const toggle = () => {
    if (!userId) {
      navigate("/login");
      return;
    }

    if (isFavorite) {
      removeFavorite({ userId, movieId: movie.kinopoiskId });
    } else {
      addFavorite({ userId, movie });
    }
  };

  if (mode === "mode2") {
    return (
      <button
        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={toggle}
      >
        {isFavorite ? "Удалить из избранного" : "Добавить в избранное"}
      </button>
    );
  }

  return (
    <motion.button
      whileTap={{ scale: 1.3 }}
      onClick={toggle}
      className="absolute top-4 left-4 text-red-500"
    >
      {isFavorite ? (
        <span data-testid="filled-heart">
          <FaHeart size={22} />
        </span>
      ) : (
        <span data-testid="empty-heart">
          <FaRegHeart size={22} />
        </span>
      )}
    </motion.button>
  );
};
