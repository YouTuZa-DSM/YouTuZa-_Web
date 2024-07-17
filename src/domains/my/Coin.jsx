import styled from "@emotion/styled";

const Coin = () => {
  return <CoinWrapper>10000 YOU</CoinWrapper>;
};

export default Coin;

const CoinWrapper = styled.div`
  height: 125px;
  margin-top: 30px;
  background: ${(props) => props.theme.colors.chart.point_up_100};
  border-radius: 20px;
  color: white;
  font-size: 2rem;
  padding: 30px;
  display: flex;
  width: min(480px, 100%);
  align-items: center;
  justify-content: space-between;
`;
