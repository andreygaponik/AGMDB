import { createRoot } from "react-dom/client";
import "@/index.css";
import App from "@/app/App";
import { Provider } from "react-redux";
import { AuthProvider } from "@/app/providers/AuthProdiver";
import { store } from "@/app/store";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <AuthProvider>
      <App />
    </AuthProvider>
  </Provider>,
);
