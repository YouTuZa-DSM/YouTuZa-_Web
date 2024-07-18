import { useMutation } from "react-query";
import axios from "axios";

const BASE_URL = `${process.env.REACT_APP_PUBLIC_BASE_URL_TWO}`;

export const useAskChatBot = () => {
  return useMutation(async (param) => axios.post(`${BASE_URL}/ask`, param), {
    onSuccess: (e) => {
      return e;
    },
  });
};
