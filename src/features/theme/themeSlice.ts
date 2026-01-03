import { createSlice } from "@reduxjs/toolkit";

interface ThemeState {
  mode: "dark" | "light";
}

const initialState: ThemeState = {
  mode: (localStorage.getItem("theme") as "light" | "dark") || "dark",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme(state) {
      state.mode = state.mode === "dark" ? "light" : "dark";
      localStorage.setItem("theme", state.mode);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
