-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Dupla" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "torneioId" TEXT NOT NULL,
    "participante1" TEXT NOT NULL,
    "participante2" TEXT NOT NULL,
    "categoriaId" TEXT NOT NULL,
    "pontuacao" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "Dupla_torneioId_fkey" FOREIGN KEY ("torneioId") REFERENCES "Torneio" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Dupla_participante1_fkey" FOREIGN KEY ("participante1") REFERENCES "Jogador" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Dupla_participante2_fkey" FOREIGN KEY ("participante2") REFERENCES "Jogador" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Dupla_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "Categoria" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Dupla" ("categoriaId", "id", "participante1", "participante2", "torneioId") SELECT "categoriaId", "id", "participante1", "participante2", "torneioId" FROM "Dupla";
DROP TABLE "Dupla";
ALTER TABLE "new_Dupla" RENAME TO "Dupla";
CREATE UNIQUE INDEX "Dupla_participante1_participante2_categoriaId_key" ON "Dupla"("participante1", "participante2", "categoriaId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
