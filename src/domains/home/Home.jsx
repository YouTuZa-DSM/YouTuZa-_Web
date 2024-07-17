import {
  HomeContainer,
  HomeTopTitleWrapper,
  HomeRealWrapper,
  HomeTopHeader,
  HomeRisingWrapper,
} from "./Home.style";

import SubTitle from "../../components/SubTitle";
import Title from "../../components/Title";
import GoToChartBtn from "../../components/button/GoToChartBtn";
import RealTimeYoutuber from "./RealTimeYoutuber";
import RisingYoutuber from "./RisingYoutuber";
import { useGetYoutuberRanking } from "../../utils/api/Youtuber";

function Home() {
  const { data } = useGetYoutuberRanking();

  return (
    <HomeContainer>
      <HomeRealWrapper>
        <HomeTopHeader>
          <HomeTopTitleWrapper>
            <SubTitle type="normal">다같이 영차영차</SubTitle>
            <Title type="normal">실시간 차트</Title>
          </HomeTopTitleWrapper>
          <GoToChartBtn />
        </HomeTopHeader>
        <RealTimeYoutuber data={data?.data} />
      </HomeRealWrapper>
      <HomeRisingWrapper>
        <HomeTopHeader>
          <HomeTopTitleWrapper>
            <SubTitle type="normal">상한가 탑승!</SubTitle>
            <Title type="normal">상승 중인 유튜버</Title>
          </HomeTopTitleWrapper>
          <GoToChartBtn />
        </HomeTopHeader>
        <RisingYoutuber />
      </HomeRisingWrapper>
    </HomeContainer>
  );
}

export default Home;
