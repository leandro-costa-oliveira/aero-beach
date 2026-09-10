import { useMutation } from "@tanstack/react-query";

import { apiClient } from "../api/api-client";

import type { CriarTorneioDTO, Torneio } from "../api/torneio.t";

export function useCadastrarTorneio() {
  return useMutation({
    mutationFn: async (payload: CriarTorneioDTO) => {
      return apiClient
        .post<{ tournament: Torneio }>("/torneios", payload)
        .then((resp) => resp.data.tournament);
    },
  });
}