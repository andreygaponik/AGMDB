import { Link } from "react-router-dom";

export const MenuLinks = () => {
  return (
    <>
      <Link
        to="/movies"
        className="text-white hover:text-red-400 transition-colors"
      >
        Фильмы
      </Link>
      <Link
        to="/series"
        className="text-white hover:text-red-400 transition-colors"
      >
        Сериалы
      </Link>
      <Link
        to="/cartoons"
        className="text-white hover:text-red-400 transition-colors"
      >
        Мультфильмы
      </Link>
      <Link
        to="/watchlist"
        className="text-white hover:text-red-400 transition-colors"
      >
        Избранное
      </Link>
    </>
  );
};
