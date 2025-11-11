import { useQuery } from "@tanstack/react-query";
import { apiClient } from "./api-client";
import { QueryKeys } from "./queryKeys";
import type { Torneio } from "./torneio.t";

interface ListaTorneios<T> {
  data: T[];
  total: number;
  page: number;
  perPage: number;
  totalPages: number;
}

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
