import { useMutation } from "@tanstack/react-query";
import { apiClient } from "../api/api-client";

interface SubscribeTournamentData {
  jogador1: {
    nome: string;
    email: string;
  };
  jogador2: {
    nome: string;
    email: string;
  };
}

interface SubscribeTournamentParams {
  torneioId: string;
  categoriaId: string;
  data: SubscribeTournamentData;
}

export function useSubscribeTournament() {
  return useMutation({
    mutationFn: async ({ torneioId, categoriaId, data }: SubscribeTournamentParams) => {
      const response = await apiClient.post(
        `/torneios/${torneioId}/inscrever/${categoriaId}`,
        data
      );
      return response.data;
    },
  });
}