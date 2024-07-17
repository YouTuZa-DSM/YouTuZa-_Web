import toast from "react-hot-toast";
import { useQuery } from "react-query";
import instance from "../axios";

const BASE_URL = `${process.env.REACT_APP_PUBLIC_BASE_URL}/user`;

export const useGetProfile = () => {
  return useQuery(
    ["user_profile"],
    async () => instance.get(`${BASE_URL}/profile`),
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

export const useGetUserWallet = () => {
  return useQuery(
    ["user_wallet"],
    async () => instance.get(`${BASE_URL}/wallet`),
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
