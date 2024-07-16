export const setToken = (accessToken: string, refreshToken: string) => {
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("refreshToken", refreshToken);
};

export const removeToken = () => {
  localStorage.removeItem("accessToken");
};

export const getToken = () => {
  const accessToken = localStorage.getItem("accessToken");

  return accessToken;
};
