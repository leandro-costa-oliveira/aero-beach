-- CreateTable
CREATE TABLE "Torneios" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT,
    "data" DATETIME NOT NULL,
    "realizado_em" DATETIME,
    "data_limite_inscricao" DATETIME NOT NULL,
    "valor_inscricao" REAL NOT NULL,
    "tipo" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "modalidade" TEXT NOT NULL,
    "federado" BOOLEAN NOT NULL DEFAULT false
);
