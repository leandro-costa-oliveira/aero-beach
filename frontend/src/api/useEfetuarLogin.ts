import { apiClient } from "./api-client";
import { useMutation } from "@tanstack/react-query";

export function useEfetuarLogin() {
  return useMutation({
    mutationFn: fetchLogin,
    onSuccess: (data) => {
      localStorage.setItem("token", data.accessToken);
    },
    onError: (e) => {
      console.log(e);
    },
  });
}

async function fetchLogin({ email, password }: { email: string; password: string }) {
  const response = await apiClient.post<{ accessToken: string }>("/auth/login", { email, password });
  return response.data;
}
