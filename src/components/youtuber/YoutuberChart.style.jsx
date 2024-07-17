import styled from "@emotion/styled";

const YoutuberChartBox = styled.div`
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const YoutuberInfo = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const YoutuberName = styled.span`
  font-size: 1.5rem;
  font-weight: 500;
`;

const YoutuberCoin = styled.span`
  font-size: 1.125rem;
  font-weight: 400;
`;

const RisingScoreChangePercent = styled.div`
  border-radius: 5px;
  padding: 0.35rem;
  text-align: end;
  font-size: 1.2rem;
  width: max-content;
  ${(props) => {
    switch (props.scoreChangedStatus) {
      case "up":
        return { color: "#ff4820", backgroundColor: "#ff482010" };
      case "down":
        return { color: "#1934B5", backgroundColor: "#1934B510" };
      case "stable":
      default:
        return {
          color: props.theme.colors.grayscale.gray_800,
          backgroundColor: "#00000010",
        };
    }
  }};
`;

export {
  YoutuberChartBox,
  YoutuberInfo,
  YoutuberName,
  YoutuberCoin,
  RisingScoreChangePercent,
};
