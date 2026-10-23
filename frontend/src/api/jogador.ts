import { apiClient } from "./api-client";

export interface CadastroJogadorDTO {
  nome: string;
  email: string;
  password: string;
}

export async function cadastrarJogador(data: CadastroJogadorDTO) {
  const response = await apiClient.post("/jogadores", data);
  return response.data;
}