// TODO: Importar o model do prisma do backend
export type Torneio = {
  id: string;
  nome: string;
  federado: boolean;
  dataRealizacao: string;
  dataLimiteInscricao: string;
  valorInscricao: number;
};
