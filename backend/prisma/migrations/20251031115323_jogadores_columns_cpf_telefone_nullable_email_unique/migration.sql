-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Jogadores" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cpf" TEXT,
    "telefone" TEXT
);
INSERT INTO "new_Jogadores" ("cpf", "email", "id", "nome", "telefone") SELECT "cpf", "email", "id", "nome", "telefone" FROM "Jogadores";
DROP TABLE "Jogadores";
ALTER TABLE "new_Jogadores" RENAME TO "Jogadores";
CREATE UNIQUE INDEX "Jogadores_email_key" ON "Jogadores"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

