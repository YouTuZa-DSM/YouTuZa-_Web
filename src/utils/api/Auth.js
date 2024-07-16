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
      toast.success("로그인을 성공하였습니다.");
      navigate("/home");
    },
    onError: (err) => {
      switch (err.response.status) {
        case 400:
          toast.error("정보를 다시 확인해주세요.");
          break;
        case 404:
          toast.error(`아이디와 비벌번호를 다시 확인해주세요.`);
          break;
        default:
          toast.error(`개발자에게 문의해주세요.`);
      }
    },
  });
};

export const useUserSignup = (signData) => {
  const navigate = useNavigate();
  return useMutation(async () => axios.post(`${BASE_URL}/signup`, signData), {
    onSuccess: (e) => {
      toast.success("회원가입에 성공하였습니다.");
      navigate("/login");
    },
    onError: (err) => {
      toast.error(`개발자에게 문의해주세요.`);
    },
  });
};
