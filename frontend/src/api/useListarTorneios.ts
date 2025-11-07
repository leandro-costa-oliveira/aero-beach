import { useQuery } from "@tanstack/react-query";
import { apiClient } from "./api-client";
import { QueryKeys } from "./queryKeys";
import type { Torneio } from "./torneio.t";

export function useListarTorneios() {
  interface ListaTorneios<T> {
    data: T[];
    total: number;
    page: number;
    perPage: number;
    totalPages: number;
  };

  return useQuery({
    queryKey: QueryKeys.ListarTorneios,
    queryFn: async () => {
      const resp = await apiClient.get<ListaTorneios<Torneio>>("/torneios/");
      return resp.data;
    },
  });
}
