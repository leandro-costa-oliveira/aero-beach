import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "../api/api-client";

export const AuthRoles = {
  Usuário: "user",
  Jogador: "player",
  Administrador: "admin",
} as const;

export type AuthRole = (typeof AuthRoles)[keyof typeof AuthRoles];

interface AtualizarRoleDTO {
  id: string;
  role: AuthRole;
}

export function useAtualizarRole() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, role }: AtualizarRoleDTO) => {
      const response = await apiClient.patch(`/jogadores/${id}`, { role });
      return response.data;
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["jogadores"] });
    },
  });
}
