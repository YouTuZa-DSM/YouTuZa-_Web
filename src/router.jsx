import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/Home";
import ChartPage from "./pages/Chart";
import MypagePage from "./pages/Mypage";

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
