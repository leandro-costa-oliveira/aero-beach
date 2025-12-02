import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../api/api-client";
import { QueryKeys } from "../api/queryKeys";
import type { Torneio } from "../api/torneio.t";

export function useUltimoTorneio() {
  return useQuery({
    queryKey: QueryKeys.UltimoTorneio,
    queryFn: async () => {
      return apiClient.get<{ tournament: Torneio }>("/torneios/latest").then((resp) => resp.data.tournament);
    },
  });
}
