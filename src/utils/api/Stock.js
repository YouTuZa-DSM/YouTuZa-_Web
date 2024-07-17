import axios from "axios";
import toast from "react-hot-toast";
import { useMutation } from "react-query";

const BASE_URL = `${process.env.REACT_APP_PUBLIC_BASE_URL}/stock`;

export const useBuyYoutuberStock = () => {
  return useMutation(
    ["buy"],
    async ({ youtubeName, purchasesCount, price }) =>
      axios.post(
        `${BASE_URL}/buy?youtube-name=${youtubeName}&purchases-count=${purchasesCount}&price=${price}`
      ),
    {
      onSuccess: (e) => {
        return e;
      },
      onError: (err) => {
        switch (err.response.status) {
          case 400:
            toast.error("YOU 코인이 부족합니다.");
            break;
          default:
            toast.error(`개발자에게 문의해주세요.`);
        }
      },
    }
  );
};

export const useSellYoutuberStock = () => {
  return useMutation(
    ["sell"],
    async ({ youtubeName, purchasesCount, price }) =>
      axios.post(
        `${BASE_URL}/buy?youtube-name=${youtubeName}&purchases-count=${purchasesCount}&price=${price}`
      ),
    {
      onSuccess: (e) => {
        return e;
      },
      onError: (err) => {
        toast.error(`개발자에게 문의해주세요.`);
      },
    }
  );
};
