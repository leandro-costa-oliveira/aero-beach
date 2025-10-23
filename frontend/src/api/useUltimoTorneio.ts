import { useQuery } from "@tanstack/react-query";
import { apiClient } from "./api-client";
import { QueryKeys } from "./queryKeys";
import type { Torneio } from "./torneio.t";

export function useUltimoTorneio() {
  return useQuery({
    queryKey: QueryKeys.UltimoTorneio,
    queryFn: async () => {
      return apiClient.get<{ tournament: Torneio }>("/torneios/latest").then((resp) => resp.data.tournament);
    },
  });
}
