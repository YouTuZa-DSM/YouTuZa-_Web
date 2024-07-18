import {
  MyContainer,
  ProfileWrapper,
  Nickname,
  MyWrapper,
  AuthButton,
  AuthButtonWrapper,
} from "./My.style";
import ProfileImage from "../../components/image/ProfileImage";
import deafultImage from "../../components/image/default";
import Bar from "../../components/bar/Bar";
import Coin from "./Coin";
import { getToken, removeToken } from "../../utils/functions/TokenManager";
import { useNavigate } from "react-router-dom";
import SubTitle from "../../components/SubTitle";
import { useGetProfile } from "../../utils/api/User";

function My() {
  const { data } = useGetProfile();
  const navigate = useNavigate();
  return (
    <MyContainer>
      <MyWrapper>
        <ProfileWrapper>
          <ProfileImage src={deafultImage} width={60} height={60} />
          {!getToken() ? (
            <Nickname style={{ color: "gray" }}>
              로그인 하시면 <br />더 많은 기능을 이용할 수 있어요!
            </Nickname>
          ) : (
            <Nickname>{data?.data?.username}</Nickname>
          )}
        </ProfileWrapper>
        <Coin coin={getToken ? data?.data?.coin : 0} />
        <Bar />
      </MyWrapper>
      <AuthButtonWrapper>
        <SubTitle type="normal">회원가입 하면 1000 YOU 지급!</SubTitle>
        <AuthButton
          onClick={
            !getToken()
              ? () => navigate("/login")
              : () => {
                  navigate("/");
                  removeToken();
                }
          }
        >
          {!getToken() ? "로그인" : "로그아웃"}
        </AuthButton>
      </AuthButtonWrapper>
    </MyContainer>
  );
}

export default My;
