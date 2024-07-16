import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import toast from "react-hot-toast";

const BASE_URL = `${process.env.REACT_APP_PUBLIC_BASE_URL}/auth`;

export const useUserLogin = (signData) => {
  const navigate = useNavigate();
  return useMutation(async () => axios.post(`${BASE_URL}/login`, signData), {
    onSuccess: (e) => {
      localStorage.setItem("access_token", e.data.access_token);
      toast.success("로그인에 성공하였습니다.");
      navigate("/home");
    },
    onError: (err) => {
      switch (err.response.status) {
        case 404:
          toast.error(`아이디와 비밀번호를 다시 확인해주세요.`);
          break;
        default:
          toast.error(`개발자에게 문의해주세요.`);
      }
    },
  });
};

export const useUserSignup = (signData) => {
  const { name, account_id, password } = signData;
  const navigate = useNavigate();
  return useMutation(
    async () =>
      axios.post(`${BASE_URL}/signup`, {
        name: name,
        account_id: account_id,
        password: password,
      }),
    {
      onSuccess: (e) => {
        toast.success("회원가입에 성공하였습니다. 로그인해주세요.");
        navigate("/");
      },
      onError: (err) => {
        toast.error(`개발자에게 문의해주세요.`);
      },
    }
  );
};
