import styled from "@emotion/styled";
import Header from "../components/layout/Header/Header";
import Title from "../components/Title";
import YoutuberChart from "../components/youtuber/YoutuberChart";
import { useGetUserWallet } from "../utils/api/User";

const WalletPage = () => {
  const { data: wallets } = useGetUserWallet();
  return (
    <>
      <Header left="뒤로가기" right="없음" />
      <Title type="normal">{wallets?.data?.coin}</Title>
      <WalletContainer>
        {wallets?.data?.have_stock_list?.map((e) => (
          <WalletWrapper>
            <YoutuberChart
              img={e.image_url}
              price={e.current_stock_price}
              name={e.stock_name}
            />
            <History>
              <div>
                <Kind>보유 수량</Kind>
                <Kind>{e.have_count}</Kind>
              </div>
              <div>
                <Kind>총 매입</Kind>
                <Kind>{e.purchase}</Kind>
              </div>
              <div>
                <Kind>수익률</Kind>
                <Kind>{e.rate_of_return} %</Kind>
              </div>
            </History>
          </WalletWrapper>
        ))}
      </WalletContainer>
    </>
  );
};

export default WalletPage;

const WalletContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-top: 30px;
`;

const WalletWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const History = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 15px 0 15px;
  border-top: 1px solid black;
`;

const Kind = styled.span`
  color: #2a2a2a;
  display: inline-block;
  font-size: 1.5rem;
  font-weight: 400;
  width: 200px;
  padding-right: 30px;
`;
