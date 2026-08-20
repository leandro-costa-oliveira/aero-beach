-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Inscricoes" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "torneioId" TEXT NOT NULL,
    "jogadorId" TEXT NOT NULL,
    "pago" BOOLEAN NOT NULL DEFAULT false,
    "dataPagamento" DATETIME,
    CONSTRAINT "Inscricoes_torneioId_fkey" FOREIGN KEY ("torneioId") REFERENCES "Torneios" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Inscricoes_jogadorId_fkey" FOREIGN KEY ("jogadorId") REFERENCES "Jogadores" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Inscricoes" ("dataPagamento", "id", "jogadorId", "pago", "torneioId") SELECT "dataPagamento", "id", "jogadorId", "pago", "torneioId" FROM "Inscricoes";
DROP TABLE "Inscricoes";
ALTER TABLE "new_Inscricoes" RENAME TO "Inscricoes";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
