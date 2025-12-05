/*
  Warnings:

  - Made the column `categoriasId` on table `Inscricoes` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Duplas" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "torneioId" TEXT NOT NULL,
    "participante1" TEXT NOT NULL,
    "participante2" TEXT NOT NULL,
    "categoriasId" TEXT NOT NULL,
    CONSTRAINT "Duplas_torneioId_fkey" FOREIGN KEY ("torneioId") REFERENCES "Torneios" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Duplas_participante1_fkey" FOREIGN KEY ("participante1") REFERENCES "Jogadores" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Duplas_participante2_fkey" FOREIGN KEY ("participante2") REFERENCES "Jogadores" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Duplas_categoriasId_fkey" FOREIGN KEY ("categoriasId") REFERENCES "Categorias" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Duplas" ("categoriasId", "id", "participante1", "participante2", "torneioId") SELECT "categoriasId", "id", "participante1", "participante2", "torneioId" FROM "Duplas";
DROP TABLE "Duplas";
ALTER TABLE "new_Duplas" RENAME TO "Duplas";
CREATE UNIQUE INDEX "Duplas_participante1_participante2_categoriasId_key" ON "Duplas"("participante1", "participante2", "categoriasId");
CREATE TABLE "new_Inscricoes" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "torneioId" TEXT NOT NULL,
    "jogadorId" TEXT NOT NULL,
    "pago" BOOLEAN NOT NULL DEFAULT false,
    "dataPagamento" DATETIME,
    "categoriasId" TEXT NOT NULL,
    CONSTRAINT "Inscricoes_torneioId_fkey" FOREIGN KEY ("torneioId") REFERENCES "Torneios" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Inscricoes_jogadorId_fkey" FOREIGN KEY ("jogadorId") REFERENCES "Jogadores" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Inscricoes_categoriasId_fkey" FOREIGN KEY ("categoriasId") REFERENCES "Categorias" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Inscricoes" ("categoriasId", "dataPagamento", "id", "jogadorId", "pago", "torneioId") SELECT "categoriasId", "dataPagamento", "id", "jogadorId", "pago", "torneioId" FROM "Inscricoes";
DROP TABLE "Inscricoes";
ALTER TABLE "new_Inscricoes" RENAME TO "Inscricoes";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
