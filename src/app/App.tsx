import { RouterProvider } from "react-router-dom";
import { router } from "@/app/router";

function App() {
  console.log('some console')
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
