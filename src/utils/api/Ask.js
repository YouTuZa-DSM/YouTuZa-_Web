import { useMutation } from "react-query";
import axios from "axios";

const BASE_URL = `${process.env.REACT_APP_PUBLIC_BASE_URL_TWO}/auth`;

export const useUserLogin = (param) => {
  return useMutation(async () => axios.post(`${BASE_URL}/ask`, param), {
    onSuccess: (e) => {
      return e.data;
    },
  });
};
