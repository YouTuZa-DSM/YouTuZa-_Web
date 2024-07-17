export const setToken = (accessToken, refreshToken) => {
  localStorage.setItem("access_token", accessToken);
  localStorage.setItem("refresh_token", refreshToken);
};

export const removeToken = () => {
  localStorage.removeItem("access_token");
};

export const getToken = () => {
  const accessToken = localStorage.getItem("access_token");

  return accessToken;
};
