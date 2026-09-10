import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../../../frontend/src/api/api-client";
import type { Torneio } from "../../../api-schema/TorneioDTO";

export function useListarTorneios() {
  return useQuery<Torneio[]>({
    queryKey: ["torneios"],
    queryFn: async () => {
      const response = await apiClient.get("/torneios");

      return response.data;
    },
  });
}
