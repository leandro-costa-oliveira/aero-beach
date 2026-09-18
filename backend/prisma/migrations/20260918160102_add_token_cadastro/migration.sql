/*
  Warnings:

  - You are about to drop the column `categoriasId` on the `Dupla` table. All the data in the column will be lost.
  - You are about to drop the column `categoriasId` on the `Inscricao` table. All the data in the column will be lost.
  - Added the required column `categoriaId` to the `Dupla` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "TokenCadastro" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "token" TEXT NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "expiresAt" DATETIME NOT NULL,
    "used" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "TokenCadastro_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Dupla" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "torneioId" TEXT NOT NULL,
    "participante1" TEXT NOT NULL,
    "participante2" TEXT NOT NULL,
    "categoriaId" TEXT NOT NULL,
    CONSTRAINT "Dupla_torneioId_fkey" FOREIGN KEY ("torneioId") REFERENCES "Torneio" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Dupla_participante1_fkey" FOREIGN KEY ("participante1") REFERENCES "Jogador" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Dupla_participante2_fkey" FOREIGN KEY ("participante2") REFERENCES "Jogador" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Dupla_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "Categoria" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Dupla" ("id", "participante1", "participante2", "torneioId") SELECT "id", "participante1", "participante2", "torneioId" FROM "Dupla";
DROP TABLE "Dupla";
ALTER TABLE "new_Dupla" RENAME TO "Dupla";
CREATE UNIQUE INDEX "Dupla_participante1_participante2_categoriaId_key" ON "Dupla"("participante1", "participante2", "categoriaId");
CREATE TABLE "new_Inscricao" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "torneioId" TEXT NOT NULL,
    "jogadorId" TEXT NOT NULL,
    "pago" BOOLEAN NOT NULL DEFAULT false,
    "dataPagamento" DATETIME,
    "categoriaId" TEXT,
    CONSTRAINT "Inscricao_torneioId_fkey" FOREIGN KEY ("torneioId") REFERENCES "Torneio" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Inscricao_jogadorId_fkey" FOREIGN KEY ("jogadorId") REFERENCES "Jogador" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Inscricao_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "Categoria" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Inscricao" ("dataPagamento", "id", "jogadorId", "pago", "torneioId") SELECT "dataPagamento", "id", "jogadorId", "pago", "torneioId" FROM "Inscricao";
DROP TABLE "Inscricao";
ALTER TABLE "new_Inscricao" RENAME TO "Inscricao";
CREATE TABLE "new_Jogador" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cpf" TEXT,
    "telefone" TEXT,
    "usuarioId" TEXT,
    CONSTRAINT "Jogador_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Jogador" ("cpf", "email", "id", "nome", "telefone") SELECT "cpf", "email", "id", "nome", "telefone" FROM "Jogador";
DROP TABLE "Jogador";
ALTER TABLE "new_Jogador" RENAME TO "Jogador";
CREATE UNIQUE INDEX "Jogador_email_key" ON "Jogador"("email");
CREATE UNIQUE INDEX "Jogador_usuarioId_key" ON "Jogador"("usuarioId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "TokenCadastro_token_key" ON "TokenCadastro"("token");

-- RedefineIndex
DROP INDEX "Categorias_torneioId_genero_modalidade_nivel_key";
CREATE UNIQUE INDEX "Categoria_torneioId_genero_modalidade_nivel_key" ON "Categoria"("torneioId", "genero", "modalidade", "nivel");

-- RedefineIndex
DROP INDEX "Usuarios_email_key";
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");
