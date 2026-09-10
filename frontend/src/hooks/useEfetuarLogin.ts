import { useContext } from "react";
import { apiClient } from "../api/api-client";
import { useMutation } from "@tanstack/react-query";
import { AuthContext } from "../Context/AuthContext";
import type { LoginDTO } from '../../../api-schema/LoginDTO';
export function useEfetuarLogin() {
  const { setAccessToken } = useContext(AuthContext);

  return useMutation({
    mutationFn: fetchLogin,
    onSuccess: (data) => {
      localStorage.setItem("token", data.accessToken);
      setAccessToken(data.accessToken);
    },
    onError: (e) => {
      localStorage.removeItem("token");
      setAccessToken(null);
      console.log(e);
    },
  });
}

async function fetchLogin({ email, password }: LoginDTO) {

  const response = await apiClient.post<{ accessToken: string }>(
    "/auth/login",
    { email, password }
  );

  if (response.status === 200) {
    apiClient.defaults.headers.common["Authorization"] = response.data.accessToken;
  }
  return response.data;
}