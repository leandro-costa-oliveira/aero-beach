import { apiClient } from "./api-client";

export async function requestLogin({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const response = await apiClient.post("/auth/login", { email, password });
  return response.data;
}
