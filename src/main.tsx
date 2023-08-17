import ReactDOM from "react-dom/client";
import "./assets/style/index.css";
import "./assets/style/font.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/index.tsx";
import { Provider } from "react-redux";
import { store } from "./store/index.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
