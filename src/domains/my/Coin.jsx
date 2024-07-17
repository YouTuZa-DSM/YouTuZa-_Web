import styled from "@emotion/styled";
import BackIcon from "../../assets/icons/BackIcon";
import { useNavigate } from "react-router-dom";

const Coin = ({ coin }) => {
  const navigate = useNavigate();
  return (
    <CoinWrapper onClick={() => navigate("/mypage/wallet")}>
      {coin} YOU
      <BackIcon fill="white" style={{ transform: "rotate(180deg)" }} />
    </CoinWrapper>
  );
};

export default Coin;

const CoinWrapper = styled.div`
  margin-bottom: 15px;
  height: 80px;
  background: ${(props) => props.theme.colors.chart.point_up_100};
  border-radius: 10px;
  color: white;
  font-size: 2rem;
  padding: 30px;
  display: flex;
  width: min(480px, 100%);
  align-items: center;
  justify-content: space-between;
`;
