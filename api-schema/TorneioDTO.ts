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

export type ListaTorneios<T> = {
  data: T[];
  total: number;
  page: number;
  perPage: number;
  totalPages: number;
};