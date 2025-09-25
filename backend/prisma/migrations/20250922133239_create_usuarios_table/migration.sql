-- CreateTable
CREATE TABLE "Usuarios" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "senha" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuarios_email_key" ON "Usuarios"("email");
CREATE UNIQUE INDEX "Usuarios_cpf_key" ON "Usuarios"("cpf");

-- Migrate data from Jogadores to Usuarios
INSERT INTO "Usuarios" ("id", "nome", "email", "telefone", "cpf", "role", "senha")
SELECT "id", "nome", "email", "telefone", "cpf", 'jogador' AS "role", NULL AS "senha"
FROM "Jogadores";

-- Recreate Jogadores table with foreign key pointing to Usuarios
PRAGMA foreign_keys=OFF;

CREATE TABLE "new_Jogadores" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    CONSTRAINT "Jogadores_id_fkey" FOREIGN KEY ("id") REFERENCES "Usuarios" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- Copy existing Jogadores data into new table
INSERT INTO "new_Jogadores" ("id", "nome")
SELECT "id", "nome" FROM "Jogadores";

-- Drop old Jogadores table
DROP TABLE "Jogadores";

-- Rename new table
ALTER TABLE "new_Jogadores" RENAME TO "Jogadores";

PRAGMA foreign_keys=ON;
