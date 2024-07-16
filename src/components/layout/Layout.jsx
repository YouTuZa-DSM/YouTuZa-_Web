import { Link, useLocation, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import FooterHomeIcon from "../../assets/icons/FooterHomeIcon";
import FooterMyPageIcon from "../../assets/icons/FooterMyPageIcon";
import { MainWrap, FooterWrap, BtnWrap, FooterWrapper } from "./Layout.style";
import FooterChartIcon from "../../assets/icons/FooterChartIcon";
import Header from "./Header/Header";

function Layout({ children }) {
  const location = useLocation();
  const [isFooter, setIsFooter] = useState(false);
  const [isHome, setIsHome] = useState(false);
  const [isChart, setIsChart] = useState(false);
  const [isMyPage, setIsMyPage] = useState(false);

  const getTitle = (path) => {
    switch (path) {
      case "/home":
        return "홈";
      case "/chart":
        return "차트";
      case "/mypage":
        return "마이페이지";
      default:
        return "title";
    }
  };

  useEffect(() => {
    if (location.pathname === "/home") {
      setIsFooter(true);
      setIsHome(true);
      setIsChart(false);
      setIsMyPage(false);
    } else if (location.pathname === "/chart") {
      setIsFooter(true);
      setIsHome(false);
      setIsChart(true);
      setIsMyPage(false);
    } else if (location.pathname === "/mypage") {
      setIsFooter(true);
      setIsHome(false);
      setIsChart(false);
      setIsMyPage(true);
    } else {
      setIsFooter(false);
      setIsHome(false);
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
              <Link to="/home" style={{ textDecoration: "none" }}>
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
