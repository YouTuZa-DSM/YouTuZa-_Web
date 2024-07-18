import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/Home";
import ChartPage from "./pages/Chart";
import MypagePage from "./pages/Mypage";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import DetailPage from "./pages/Detail";
import WalletPage from "./pages/Wallet";
import ChatBotPage from "./pages/ChatBot";

export const Router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/login", element: <LoginPage /> },
      { path: "/signup", element: <SignupPage /> },
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/chart",
        element: <ChartPage />,
      },
      {
        path: "/chatbot",
        element: <ChatBotPage />,
      },
      {
        path: "/mypage",
        element: <MypagePage />,
      },
      {
        path: "/mypage/wallet",
        element: <WalletPage />,
      },
      {
        path: "/youtuber/:name",
        element: <DetailPage />,
      },
    ],
  },
]);
