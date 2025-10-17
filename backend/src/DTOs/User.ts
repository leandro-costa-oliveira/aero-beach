/**
 * @deprecated Utilizar o type `Usuarios` do próprio prisma quanddo for escopo da tarefa. E deletar esse arquivo quando UserDTO não for mais usado.
*/
export type UserDTO = {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  role: string;
  senha: string | null;
  salt: string | null;
}