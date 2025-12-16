import { useGetTop250MoviesQuery } from "@/app/api/kinopoiskapiunofficial";

export const useTop250Movies = (page = 1) => {
  const {
    data: moviesData,
    isLoading: moviesLoading,
    error: moviesError,
  } = useGetTop250MoviesQuery(page);

  return {
    moviesData,
    moviesLoading,
    moviesError,
  };
};
