import { MyContainer, ProfileWrapper, Nickname } from "./My.style";
import ProfileImage from "../../components/image/ProfileImage";
import deafultImage from "../../components/image/default";
import Bar from "../../components/bar/Bar";
import Coin from "./Coin";

function My() {
  return (
    <MyContainer>
      <ProfileWrapper>
        <ProfileImage src={deafultImage} width={120} height={120} />
        <Nickname>이름</Nickname>
      </ProfileWrapper>
      <Bar />
      <Coin />
    </MyContainer>
  );
}

export default My;
