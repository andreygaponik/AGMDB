import { useTheme } from "@/features/theme/useTheme";

export const ThemeToggle = () => {
  const { mode, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      className="p-2 rounded-full border border-gray-500 flex items-center justify-center cursor-pointer"
      aria-label="Toggle theme"
    >
      {mode === "light" ? "🌞" : "🌙"}
    </button>
  );
};
