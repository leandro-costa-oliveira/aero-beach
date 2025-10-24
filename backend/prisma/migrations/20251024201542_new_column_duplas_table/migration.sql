/*
  Warnings:

  - Added the required column `torneioId` to the `duplas` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_duplas" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "torneioId" TEXT NOT NULL,
    "participante1" TEXT NOT NULL,
    "participante2" TEXT NOT NULL,
    CONSTRAINT "duplas_torneioId_fkey" FOREIGN KEY ("torneioId") REFERENCES "Torneios" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "duplas_participante1_fkey" FOREIGN KEY ("participante1") REFERENCES "Jogadores" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "duplas_participante2_fkey" FOREIGN KEY ("participante2") REFERENCES "Jogadores" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_duplas" ("id", "participante1", "participante2") SELECT "id", "participante1", "participante2" FROM "duplas";
DROP TABLE "duplas";
ALTER TABLE "new_duplas" RENAME TO "Duplas";
CREATE UNIQUE INDEX "Duplas_participante1_participante2_key" ON "Duplas"("participante1", "participante2");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
