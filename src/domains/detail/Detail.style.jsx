import styled from "@emotion/styled";

const Price = styled.div`
  font-size: 4rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.chart.point_up_100};
`;

const RisingScoreChangePercent = styled.span`
  font-size: 2.5rem;
  font-weight: 500;
  ${(props) => {
    switch (props.scoreChangedStatus) {
      case "up":
        return { color: "#ff4820" };
      case "down":
        return { color: "#1934B5" };
      case "stable":
      default:
        return {
          color: props.theme.colors.grayscale.gray_800,
          backgroundColor: "#00000010",
        };
    }
  }};
`;

const YoutuberWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-bottom: 30px;
`;

const TabMenu = styled.div`
  padding-top: 15px;
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

export { TabMenu, YoutuberWrapper, RisingScoreChangePercent, Price };
