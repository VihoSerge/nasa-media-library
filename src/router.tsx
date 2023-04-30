import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/home";
import SearchPage from "./pages/search";
import ShowPage from "./pages/show";
import ErrorPage from "./pages/error";
import RootPage from "./pages";

export const pagesRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        path: "",
        element: <HomePage />
      },
      {
        path: "search",
        element: <SearchPage />
      },
      {
        path: "show/:nasaId",
        element: <ShowPage />
      }
    ],
    errorElement: <ErrorPage />
  }
]);
