const MovieCardSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="w-full aspect-[2/3] bg-gray-300 rounded-lg h-85" />
      <div className="mt-2 h-5 bg-gray-300 rounded w-40 ml-auto mr-auto" />
      {/*<div className="mt-1 h-3 bg-gray-200 rounded w-1/2" />*/}
    </div>
  );
};

export default MovieCardSkeleton;
