import { motion, AnimatePresence } from "framer-motion";

import type { Movie } from "@/app/api/types";
import { MovieCard } from "./MovieCard";

import { useSelector } from "react-redux";
import type { RootState } from "@/app/store";

interface MovieListProps {
  title: string;
  items: Movie[];
  isAnimated?: boolean;
}

export const MovieList = (props: MovieListProps) => {
  const { title, items, isAnimated = false } = props;

  const user = useSelector((state: RootState) => state.auth.user);

  const renderCard = (movie: Movie) => (
    <MovieCard key={movie.kinopoiskId} movie={movie} user={user} />
  );

  const renderAnimatedCard = (movie: Movie) => (
    <motion.div
      key={movie.kinopoiskId}
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
    >
      <MovieCard movie={movie} user={user} />
    </motion.div>
  );

  return (
    <section className="movies-list mb-14">
      <div className="container">
        <h2 className="text-2xl font-semibold mb-6">{title}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-6 gap-y-14">
          {isAnimated ? (
            <AnimatePresence>{items.map(renderAnimatedCard)}</AnimatePresence>
          ) : (
            items.map(renderCard)
          )}
        </div>
      </div>
    </section>
  );
};
