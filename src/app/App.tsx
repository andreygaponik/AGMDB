import { RouterProvider } from "react-router-dom";
import { router } from "@/app/router";
import { useTheme } from "@/features/theme/useTheme";
import { useEffect } from "react";

function App() {
  const { mode } = useTheme();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
  }, [mode]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
