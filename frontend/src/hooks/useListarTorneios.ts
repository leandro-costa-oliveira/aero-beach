import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../api/api-client";
import { QueryKeys } from "../api/queryKeys";
import type { Torneio, ListaTorneios } from "../api/torneio.t";

export function useListarTorneios(page: number = 1, perPage: number = 6) {
  return useQuery({
    queryKey: [...QueryKeys.ListarTorneios, page, perPage],
    queryFn: async () => {
      const resp = await apiClient.get<ListaTorneios<Torneio>>(
        `/torneios/?page=${page}&perPage=${perPage}`
      );

      return resp.data;
    },
  });
}