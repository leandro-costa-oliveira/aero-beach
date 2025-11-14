import { useContext } from "react";
import { apiClient } from "../api/api-client";
import { useMutation } from "@tanstack/react-query";
import { AuthContext } from "../Context/AuthContext";

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

async function fetchLogin({ email, password }: { email: string; password: string }) {
  const response = await apiClient.post<{ accessToken: string }>("/auth/login", { email, password });
  return response.data;
}
