// TODO: Importar o model do prisma do backend

export type Categoria = {
  id: string;
  genero: string;
  modalidade: string; 
  nivel: string; 
  valorInscricao: number;
  dataRealizacao: string | null;
};

export type Torneio = {
  id: string;
  nome: string;
  federado: boolean;
  dataInicio: string;
  dataLimiteInscricao: string;
  situacao: string;
  categorias: Categoria[];
};

export type TorneioForm = {
  nome: string;
  dataInicio: Date;
  dataLimiteInscricao: Date;
  federado: boolean;
  situacao?: boolean;
};