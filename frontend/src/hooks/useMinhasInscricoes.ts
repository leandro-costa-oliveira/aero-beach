import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../api/api-client";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const { userId } = useContext(AuthContext);

export function useMinhasInscricoes() {
  return useQuery({
    queryKey: ["minhas-inscricoes" , userId],
    queryFn: async () => {
      const response = await apiClient.get("/torneios/minhas-inscricoes");
      return response.data;
    },
  });
}