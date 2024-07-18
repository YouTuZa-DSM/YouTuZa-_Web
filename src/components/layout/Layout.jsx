import { Link, useLocation, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import FooterHomeIcon from "../../assets/icons/FooterHomeIcon";
import FooterMyPageIcon from "../../assets/icons/FooterMyPageIcon";
import { MainWrap, FooterWrap, BtnWrap, FooterWrapper } from "./Layout.style";
import FooterChartIcon from "../../assets/icons/FooterChartIcon";
import Header from "./Header/Header";
import FooterChatBotIcon from "../../assets/icons/FooterChatBot";

function Layout({ children }) {
  const location = useLocation();
  const [isFooter, setIsFooter] = useState(false);
  const [isHome, setIsHome] = useState(false);
  const [isChart, setIsChart] = useState(false);
  const [isChatBot, setIsChatBot] = useState(false);
  const [isMyPage, setIsMyPage] = useState(false);

  const getTitle = (path) => {
    switch (path) {
      case "/":
        return "홈";
      case "/chart":
        return "차트";
      case "/mypage":
        return "마이페이지";
      case "/chatbot":
        return "챗봇";
      default:
        return "title";
    }
  };

  useEffect(() => {
    if (location.pathname === "/") {
      setIsFooter(true);
      setIsHome(true);
      setIsChatBot(false);
      setIsChart(false);
      setIsMyPage(false);
    } else if (location.pathname === "/chart") {
      setIsFooter(true);
      setIsHome(false);
      setIsChart(true);
      setIsChatBot(false);
      setIsMyPage(false);
    } else if (location.pathname === "/mypage") {
      setIsFooter(true);
      setIsHome(false);
      setIsChatBot(false);
      setIsChart(false);
      setIsMyPage(true);
    } else if (location.pathname === "/chatbot") {
      setIsFooter(true);
      setIsHome(false);
      setIsChart(false);
      setIsChatBot(true);
      setIsMyPage(false);
    } else {
      setIsFooter(false);
      setIsHome(false);
      setIsChatBot(false);
      setIsChart(false);
      setIsMyPage(false);
    }
  }, [isFooter, location.pathname]);

  const title = getTitle(location.pathname);

  return (
    <>
      <MainWrap isFooter={isFooter}>
        {isFooter && <Header title={title} left="타이틀" right="없음" />}
        <Outlet />
        {children}
      </MainWrap>
      {isFooter && (
        <FooterWrapper>
          <FooterWrap>
            <BtnWrap>
              <Link to="/" style={{ textDecoration: "none" }}>
                <FooterHomeIcon isHome={isHome} />
                <span style={{ color: " black" }}>홈</span>
              </Link>
            </BtnWrap>
            <BtnWrap>
              <Link to="/chart" style={{ textDecoration: "none" }}>
                <FooterChartIcon isChart={isChart} />
                <span style={{ color: " black" }}>차트</span>
              </Link>
            </BtnWrap>
            <BtnWrap>
              <Link to="/chatbot" style={{ textDecoration: "none" }}>
                <FooterChatBotIcon isChatBot={isChatBot} />
                <span style={{ color: "black" }}>챗봇</span>
              </Link>
            </BtnWrap>
            <BtnWrap>
              <Link to="/mypage" style={{ textDecoration: "none" }}>
                <FooterMyPageIcon isMyPage={isMyPage} />
                <span style={{ color: " black" }}>마이페이지</span>
              </Link>
            </BtnWrap>
          </FooterWrap>
        </FooterWrapper>
      )}
    </>
  );
}

export default Layout;
