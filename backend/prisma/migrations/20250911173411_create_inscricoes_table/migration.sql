-- CreateTable
CREATE TABLE "Inscricoes" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "torneio_id" TEXT NOT NULL,
    "jogador_id" TEXT NOT NULL,
    "pagamento" BOOLEAN NOT NULL DEFAULT false,
    "dataPagamento" DATETIME NOT NULL,
    CONSTRAINT "Inscricoes_torneio_id_fkey" FOREIGN KEY ("torneio_id") REFERENCES "Torneios" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Inscricoes_jogador_id_fkey" FOREIGN KEY ("jogador_id") REFERENCES "Jogadores" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
