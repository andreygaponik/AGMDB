import { useGetTop250tvShowsQuery } from "@/app/api/kinopoiskapiunofficial";

export const useTop250tvShows = (page = 1) => {
  const {
    data: tvShowsData,
    isLoading: tvShowsLoading,
    error: tvShowsError,
  } = useGetTop250tvShowsQuery(page);

  return {
    tvShowsData,
    tvShowsLoading,
    tvShowsError,
  };
};
