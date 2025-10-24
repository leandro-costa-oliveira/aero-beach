import { useMutation } from "@tanstack/react-query";
import { apiClient } from "./api-client";
import type { Torneio } from "./torneio.t";

export function useCadastrarTorneio() {
  return useMutation({
    mutationFn: async (payload: TorneioForm) => {
      return apiClient.post<{ tournament: Torneio }>("/torneios", payload).then((resp) => resp.data.tournament);
    },
  });
}

// TODO: Importar o DTO do backend
type TorneioForm = {
  nome: string;
  federado: boolean;
};
