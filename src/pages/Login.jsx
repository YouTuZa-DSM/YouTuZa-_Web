import styled from "@emotion/styled/macro";
import Input from "../components/common/Input";
import { Logo } from "../assets/index";
import { useForm } from "../hooks/useForm";
import { Link } from "react-router-dom";
import { useUserLogin } from "../utils/api/Auth";

const LoginPage = () => {
  const { form: signForm, handleChange: signFormChange } = useForm({
    account_id: "",
    password: "",
  });
  const { account_id, password } = signForm;
  const { mutate } = useUserLogin(signForm);

  const handleLoginClick = () => {
    mutate();
  };

  return (
    <Container>
      <img src={Logo} alt="로고 이미지 입니다." height={86} width={243} />
      <InputWrapper>
        <Input
          name="account_id"
          value={account_id}
          onChange={signFormChange}
          placeholder="아이디를 입력해주세요."
          isCount={false}
        />
        <Input
          name="password"
          value={password}
          onChange={signFormChange}
          placeholder="비밀번호를 입력해주세요."
          type="password"
          isCount={false}
        />
      </InputWrapper>
      <SubmitButton onClick={handleLoginClick}>로그인</SubmitButton>
      <p>
        계정이 없으신가요?
        <Link to="/signup"> 회원가입하러 가기</Link>
      </p>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  gap: 36px;
  align-items: center;

  > p {
    font-size: 12px;
    color: ${(props) => props.theme.colors.grayscale.gray_600};
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 44px;
  color: white;
  font-size: 18px;
  background: #ec5c30;
  border-radius: 12px;
`;

export default LoginPage;
