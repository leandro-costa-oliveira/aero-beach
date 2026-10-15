import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../api/api-client";

export function useMinhasInscricoes() {
  return useQuery({
    queryKey: ["minhas-inscricoes"],
    queryFn: async () => {
      const response = await apiClient.get("/torneios/minhas-inscricoes");
      return response.data;
    },
  });
}