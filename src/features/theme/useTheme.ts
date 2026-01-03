import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "@/app/store";
import { toggleTheme } from "./themeSlice";

export const useTheme = () => {
  const mode = useSelector((state: RootState) => state.theme.mode);
  const dispatch = useDispatch<AppDispatch>();
  const toggle = () => dispatch(toggleTheme());
  return { mode, toggle };
};
