import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGetFavoritesQuery } from "../api/favoritesApi";

interface FavoritesCounterProps {
  userId: string | null;
}

export const FavoritesCounter = ({ userId }: FavoritesCounterProps) => {
  const { data: favoriteIds } = useGetFavoritesQuery(userId!, {
    skip: !userId,
  });

  const count = favoriteIds?.length ?? 0;

  return (
    <Link to="/watchlist" className="relative">
      <FaHeart size={24} color="#fff" />
      {count > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-600 text-xs rounded-full px-1">
          {count}
        </span>
      )}
    </Link>
  );
};
