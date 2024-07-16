import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/home";
import ChartPage from "./pages/chart";
import MypagePage from "./pages/mypage";

export const Router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/chart",
        element: <ChartPage />,
      },
      {
        path: "/mypage",
        element: <MypagePage />,
      },
    ],
  },
]);
