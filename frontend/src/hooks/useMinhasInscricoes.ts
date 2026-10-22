import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../api/api-client";
import { AuthContext } from "../Context/AuthContext";

export function useMinhasInscricoes() {
  const { userId } = useContext(AuthContext);

  return useQuery({
    queryKey: ["minhas-inscricoes", userId],
    queryFn: async () => {
      const response = await apiClient.get("/torneios/minhas-inscricoes");
      return response.data;
    },
    enabled: !!userId,
  });
}