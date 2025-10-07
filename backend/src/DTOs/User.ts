export type UserDTO = {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  role: string;
  senha: string | null;
  salt: string | null;
}