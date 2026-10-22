import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../api/api-client";
import { AuthContext } from "../Context/AuthContext";

export function useHistorico() {
  const { userId } = useContext(AuthContext);

  return useQuery({
    queryKey: ["historico", userId],
    queryFn: async () => {
      const response = await apiClient.get("/torneios/historico");
      return response.data;
    },
    enabled: !!userId,
  });
}