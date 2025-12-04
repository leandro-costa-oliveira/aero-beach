import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../api/api-client";
import { QueryKeys } from "../api/queryKeys";
import type { Categoria } from "../api/torneio.t";

export function useCategory(id: string, cateId: string) {
  return useQuery({
    queryKey: [QueryKeys.useCategoria, id, cateId],
    queryFn: async () => {
      const categoria = await apiClient.get<Categoria>(`/torneios/${id}/inscrever/${cateId}`).then((resp) => resp.data);
      return categoria;
    },
  });
}
