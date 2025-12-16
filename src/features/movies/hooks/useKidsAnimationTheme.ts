import { useGetKidsAnimationThemeQuery } from "@/app/api/kinopoiskapiunofficial";

export const useKidsAnimationTheme = (page = 1) => {
  const {
    data: kidsAnimationData,
    isLoading: kidsAnimationLoading,
    error: kidsAnimationError,
  } = useGetKidsAnimationThemeQuery(page);

  return {
    kidsAnimationData,
    kidsAnimationLoading,
    kidsAnimationError,
  };
};
