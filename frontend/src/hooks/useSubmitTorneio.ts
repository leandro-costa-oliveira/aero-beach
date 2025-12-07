import { apiClient } from "../api/api-client";
import { useMutation } from "@tanstack/react-query";
import type { TorneioForm } from "../api/torneio.t";

export function useSubmitTorneio() {

  return useMutation({
    mutationFn: submitTorneio,
    onSuccess: () => {
      console.log("Torneio criado com sucesso");
    },
    onError: (e) => {
      console.log(e);
    },
  });
}

async function submitTorneio( torneio: TorneioForm) {
  // TODO: adicionar @Authorized no endpoint /torneios no backend. No momento está comentado
  await apiClient.post("/torneios", torneio)
}
