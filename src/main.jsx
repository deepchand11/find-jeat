import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import SearchBar from "./components/SearchBar.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";

const Routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/search",
    element: <SearchBar />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
];

const router = createBrowserRouter(Routes);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>
);
