import instance from "../axios";
import toast from "react-hot-toast";
import { useMutation, useQuery, useQueryClient } from "react-query";

const BASE_URL = `${process.env.REACT_APP_PUBLIC_BASE_URL}/comment`;

export const useGetYoutuberComment = (youtuberName) => {
  return useQuery(
    ["comment", youtuberName],
    async () => {
      const response = await instance.get(
        `${BASE_URL}?youtuber-name=${youtuberName}`
      );
      return response.data;
    },
    {
      onSuccess: (data) => {
        return data;
      },
      onError: (err) => {
        toast.error(`개발자에게 문의해주세요.`);
      },
    }
  );
};

export const useWriteYoutuberComment = (youtuberName, form, setForm) => {
  const queryClient = useQueryClient();

  return useMutation(
    async () => {
      const response = await instance.post(
        `${BASE_URL}?youtuber-name=${youtuberName}`,
        form
      );
      return response.data;
    },
    {
      onSuccess: (data) => {
        toast.success("의견이 성공적으로 생성되었습니다.");
        setForm({ title: "", content: "" });
        queryClient.invalidateQueries(["comment", youtuberName]);
        return data;
      },
      onError: (err) => {
        toast.error(`개발자에게 문의해주세요.`);
      },
    }
  );
};
