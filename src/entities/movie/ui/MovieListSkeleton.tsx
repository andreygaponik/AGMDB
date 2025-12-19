import MovieCardSkeleton from "./MovieCardSkeleton";

export const MovieListSkeleton = (props: { count: number }) => {
  const { count } = props;

  return (
    <section className="movies-list mb-14">
      <div className="container">
        <div className="text-2xl font-semibold mb-6 h-8"></div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-14">
          {Array.from({ length: count }).map((_, index) => (
            <MovieCardSkeleton key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
