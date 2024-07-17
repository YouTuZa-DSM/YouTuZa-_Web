import styled from "@emotion/styled";

const HomeContainer = styled.main``;

const HomeRealWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  padding-top: 30px;
`;

const HomeTopTitleWrapper = styled.div`
  display: inline-block;
  align-items: flex-start;
`;

const HomeTopHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HomeTopSubTitle = styled.span`
  font-size: 1.6rem;
  font-weight: 500;
`;

const HomeTopTitle = styled.h1`
  padding-top: 0.4rem;
  width: 200px;
  font-size: 2.4rem;
`;

const HomeRisingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  padding-top: 45px;
`;

export {
  HomeContainer,
  HomeRealWrapper,
  HomeTopTitleWrapper,
  HomeTopHeader,
  HomeTopSubTitle,
  HomeTopTitle,
  HomeRisingWrapper,
};
