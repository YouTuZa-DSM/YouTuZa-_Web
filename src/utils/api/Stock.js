import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
import instance from "../axios";

const BASE_URL = `${process.env.REACT_APP_PUBLIC_BASE_URL}/stock`;

export const useBuyYoutuberStock = (name) => {
  const query = useQueryClient();
  return useMutation(
    ["buy"],
    async ({ youtubeName, purchasesCount, price }) =>
      instance.post(
        `${BASE_URL}/buy?youtube-name=${youtubeName}&purchases-count=${purchasesCount}&price=${price}`
      ),
    {
      onSuccess: (e) => {
        query.invalidateQueries(["asking_price", name]);
        query.invalidateQueries(["youtuber_detail", name]);
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

export const useSellYoutuberStock = (name) => {
  const query = useQueryClient();
  return useMutation(
    ["sell"],
    async ({ youtubeName, purchasesCount, price }) =>
      instance.post(
        `${BASE_URL}/sell?youtube-name=${youtubeName}&purchases-count=${purchasesCount}&price=${price}`
      ),
    {
      onSuccess: (e) => {
        query.invalidateQueries(["asking_price", name]);
        query.invalidateQueries(["youtuber_detail", name]);
        return e;
      },
      onError: (err) => {
        toast.error(`개발자에게 문의해주세요.`);
      },
    }
  );
};
