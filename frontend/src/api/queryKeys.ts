export const QueryKeys = {
  UltimoTorneio: ["ultimo-torneio"],
  ListarTorneios: ["Lista-torneio"],
  useTorneio: (id: string) => ["torneio", id],
  useCategoria: (id: string, cateId: string) => ["categoria", id, cateId],
};
