import axios from "axios";
import toast from "react-hot-toast";
import { useQuery } from "react-query";

const BASE_URL = `${process.env.REACT_APP_PUBLIC_BASE_URL}/youtuber`;

export const useGetYoutuberRanking = () => {
  return useQuery(async () => axios.get(`${BASE_URL}/top`), {
    onSuccess: (e) => {
      return e;
    },
    onError: (err) => {
      toast.error(`개발자에게 문의해주세요.`);
    },
  });
};

export const useGetIncreaseYoutuber = () => {
  return useQuery(async () => axios.get(`${BASE_URL}/increase`), {
    onSuccess: (e) => {
      return e;
    },
    onError: (err) => {
      toast.error(`개발자에게 문의해주세요.`);
    },
  });
};

export const useGetYoutuber = () => {
  return useQuery(async () => axios.get(`${BASE_URL}/all`), {
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
    async () => axios.get(`${BASE_URL}/details?youtuber-name=${youtuberName}`),
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
