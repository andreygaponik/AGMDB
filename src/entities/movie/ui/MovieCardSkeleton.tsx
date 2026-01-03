const MovieCardSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="w-full aspect-[2/3] bg-gray-300 rounded-lg 2xl:h-85 xl:h-72 h-80" />
      <div className="mt-2 h-5 bg-gray-300 rounded w-40 ml-auto mr-auto" />
    </div>
  );
};

export default MovieCardSkeleton;
