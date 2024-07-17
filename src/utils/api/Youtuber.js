import toast from "react-hot-toast";
import { useQuery } from "react-query";
import instance from "../axios";

const BASE_URL = `${process.env.REACT_APP_PUBLIC_BASE_URL}/youtuber`;

export const useGetYoutuberRanking = () => {
  return useQuery(
    ["youtuber_ranking"],
    async () => instance.get(`${BASE_URL}/top`),
    {
      onSuccess: (e) => {
        console.log(e);
        return e;
      },
      onError: (err) => {
        toast.error(`개발자에게 문의해주세요.`);
      },
    }
  );
};

export const useGetIncreaseYoutuber = () => {
  return useQuery(
    ["youtuber_increase"],
    async () => instance.get(`${BASE_URL}/increase`),
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

export const useGetYoutuber = () => {
  return useQuery(["youtuber"], async () => instance.get(`${BASE_URL}/all`), {
    onSuccess: (e) => {
      return e;
    },
    onError: (err) => {
      toast.error(`개발자에게 문의해주세요.`);
    },
  });
};

export const useGetYoutuberDetail = (youtuberName) => {
  return useQuery(
    ["youtuber_detail", youtuberName],
    async () =>
      instance.get(`${BASE_URL}/details?youtuber-name=${youtuberName}`),
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

export const useGetYoutuberChart = (youtuberName) => {
  return useQuery(
    async () => instance.get(`${BASE_URL}/chart?youtuber-name=${youtuberName}`),
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

export const useGetYoutuberAskPrice = (youtuberName) => {
  return useQuery(
    ["asking_price", youtuberName],
    async () =>
      instance.get(`${BASE_URL}/ask-price?youtuber-name=${youtuberName}`),
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
