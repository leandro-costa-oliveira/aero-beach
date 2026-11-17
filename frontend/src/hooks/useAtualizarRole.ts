import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "../api/api-client";
import { QueryKeys } from "../api/queryKeys";

interface AtualizarRoleDTO {
  id: string;
  role: "user" | "player" | "admin";
}

async function fetchAtualizarRole({ id, role }: AtualizarRoleDTO) {
  const response = await apiClient.patch(`/jogadores/${id}`, {
    role,
  });

  return response.data;
}

export function useAtualizarRole() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: fetchAtualizarRole,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: QueryKeys.ListarUsuarios,
      });
    },

    onError: (e) => {
      console.log(e);
    },
  });
}