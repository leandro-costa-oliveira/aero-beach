/*
  Warnings:

  - You are about to drop the column `categoria` on the `Torneios` table. All the data in the column will be lost.
  - You are about to drop the column `dataRealizacao` on the `Torneios` table. All the data in the column will be lost.
  - You are about to drop the column `modalidade` on the `Torneios` table. All the data in the column will be lost.
  - You are about to drop the column `tipo` on the `Torneios` table. All the data in the column will be lost.
  - You are about to drop the column `valorInscricao` on the `Torneios` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Torneios" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT,
    "dataInicio" DATETIME NOT NULL,
    "dataLimiteInscricao" DATETIME NOT NULL,
    "federado" BOOLEAN NOT NULL DEFAULT false,
    "situacao" TEXT NOT NULL DEFAULT 'aberto'
);
INSERT INTO "new_Torneios" ("dataInicio", "dataLimiteInscricao", "federado", "id", "nome", "situacao") SELECT "dataInicio", "dataLimiteInscricao", "federado", "id", "nome", "situacao" FROM "Torneios";
DROP TABLE "Torneios";
ALTER TABLE "new_Torneios" RENAME TO "Torneios";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
