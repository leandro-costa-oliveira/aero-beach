import { useQuery } from "@tanstack/react-query";
import { apiClient } from "./api-client";
import { queryClient } from "./queryClient";
import { QueryKeys } from "./queryKeys";
import type { Torneio, ListaTorneios } from "./torneio.t";

export function useListarTorneios(page: number = 1, perPage: number = 6) {
  return useQuery({
    queryKey: [...QueryKeys.ListarTorneios, page, perPage],
    queryFn: async () => {
      const resp = await apiClient.get<ListaTorneios<Torneio>>(
        `/torneios/?page=${page}&perPage=${perPage}`
      );

      resp.data.data.forEach((torneio) => {
        queryClient.setQueryData(
          QueryKeys.useTorneio(torneio.id),
          torneio
        );
      });

      return resp.data;
    },
  });
}