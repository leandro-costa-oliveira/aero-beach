import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "../api/queryKeys";
import { apiClient } from "../api/api-client";
import type { Torneio } from "../api/torneio.t";

export function useTorneioById(id: string) {
  return useQuery({
    queryKey: [QueryKeys.TorneioById, id],
    queryFn: async () => {
      const torneio = await apiClient
        .get<Torneio>(`/torneios/${id}`)
        .then((resp) => resp.data);
      return torneio;
    },
  });
}
9