import LogoIcon from "../../../assets/icons/LogoIcon";
import BackButton from "./BackButton";
import { LeftWrap } from "./LeftButton.style";
import { useNavigate } from "react-router-dom";
import { Title } from "./Header.style";

function LeftButton({ left, isPainted, title }) {
  const navigate = useNavigate();
  return (
    <LeftWrap>
      {left === "로고" ? (
        <button onClick={() => navigate(0)}>
          <LogoIcon />
        </button>
      ) : left === "뒤로가기" ? (
        <BackButton isPainted={isPainted} />
      ) : left === "타이틀" ? (
        title && <Title>{title}</Title>
      ) : (
        <></>
      )}
    </LeftWrap>
  );
}

export default LeftButton;
