import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/Home";
import ChartPage from "./pages/Chart";
import MypagePage from "./pages/Mypage";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import DetailPage from "./pages/Detail";

export const Router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <LoginPage /> },
      { path: "/signup", element: <SignupPage /> },
      {
        path: "/home",
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
      {
        path: "/youtuber/:name",
        element: <DetailPage />,
      },
    ],
  },
]);
