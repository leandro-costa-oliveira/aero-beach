export type TipoTorneio =
  | "masculino"
  | "feminino"
  | "misto";

export type CategoriaTorneio =
  | "iniciante"
  | "d"
  | "c"
  | "b"
  | "a"
  | "open";

export type ModalidadeTorneio =
  | "duplas"
  | "simples";

export type SituacaoTorneio =
  | "aberto"
  | "cancelado"
  | "realizando"
  | "concluído";

export type Categoria = {
  id: string;
  torneioId: string;
  genero: TipoTorneio;
  modalidade: ModalidadeTorneio;
  nivel: CategoriaTorneio;
  valorInscricao: number;
  dataRealizacao: string | null;
};

export type Torneio = {
  id: string;
  nome: string | null;
  federado: boolean;
  dataInicio: string;
  dataLimiteInscricao: string;
  situacao: SituacaoTorneio;
  categorias: Categoria[];
};

export type ListaTorneios<T> = {
  data: T[];
  total: number;
  page: number;
  perPage: number;
  totalPages: number;
};

export type CriarTorneioDTO = {
  nome: string;
  federado: boolean;
  dataInicio: string;
  dataLimiteInscricao: string;
};

export type CriarCategoriaDTO = {
  torneioId: string;
  genero: TipoTorneio;
  modalidade: ModalidadeTorneio;
  nivel: CategoriaTorneio;
  valorInscricao: number;
  dataRealizacao: string | null;
};