import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../api/api-client";
import { QueryKeys } from "../api/queryKeys";

export interface Usuario {
  id: string;
  nome: string;
  email: string;
  role: "user" | "player" | "admin";
}

interface ListaUsuarios {
  jogadores: Usuario[];
}

export function useListaUsuarios() {
  return useQuery({
    queryKey: QueryKeys.ListarUsuarios,
    queryFn: async () => {
      const resp = await apiClient.get<ListaUsuarios>("/jogadores");

      return resp.data;
    },
  });
}