import styled from "@emotion/styled/macro";
import Input from "../components/common/Input";
import { Logo } from "../assets/index";
import { useForm } from "../hooks/useForm";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { useUserSignup } from "../utils/api/Auth";

const SignupPage = () => {
  const { form: signForm, handleChange: signFormChange } = useForm({
    name: "",
    account_id: "",
    password: "",
    check_password: "",
  });
  const { account_id, password, name, check_password } = signForm;

  const { mutate } = useUserSignup(signForm);

  const handleSignupClick = () => {
    if (password !== check_password) {
      toast.error("비밀번호가 일치하지 않습니다.");
    } else {
      mutate();
    }
  };

  return (
    <Container>
      <img src={Logo} alt="로고 이미지 입니다." height={86} width={243} />
      <InputWrapper>
        <Input
          name="name"
          value={name}
          onChange={signFormChange}
          placeholder="이름을 입력해주세요."
          max={10}
        />
        <Input
          name="account_id"
          value={account_id}
          onChange={signFormChange}
          placeholder="아이디를 입력해주세요."
          max={10}
        />
        <Input
          name="password"
          value={password}
          onChange={signFormChange}
          placeholder="비밀번호"
          type="password"
        />
        <Input
          name="check_password"
          value={check_password}
          onChange={signFormChange}
          placeholder="비밀번호 확인"
          type="password"
        />
      </InputWrapper>
      <SubmitButton onClick={handleSignupClick}>회원가입</SubmitButton>
      <p>
        이미 계정이 있으신가요?
        <Link to="/"> 로그인하러 가기</Link>
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

export default SignupPage;
