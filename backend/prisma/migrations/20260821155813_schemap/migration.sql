/*
  Warnings:

  - You are about to drop the `Categorias` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Duplas` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Inscricoes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Jogadores` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Torneios` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Usuarios` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Categorias";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Duplas";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Inscricoes";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Jogadores";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Torneios";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Usuarios";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Usuario" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'user',
    "telefone" TEXT,
    "senha" TEXT,
    "salt" TEXT
);

-- CreateTable
CREATE TABLE "Torneio" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT,
    "dataInicio" DATETIME NOT NULL,
    "dataLimiteInscricao" DATETIME NOT NULL,
    "federado" BOOLEAN NOT NULL DEFAULT false,
    "situacao" TEXT NOT NULL DEFAULT 'aberto'
);

-- CreateTable
CREATE TABLE "Jogador" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cpf" TEXT,
    "telefone" TEXT,
    "usuarioId" TEXT,
    CONSTRAINT "Jogador_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Inscricao" (
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

-- CreateTable
CREATE TABLE "Dupla" (
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

-- CreateTable
CREATE TABLE "Categoria" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "torneioId" TEXT NOT NULL,
    "genero" TEXT NOT NULL,
    "modalidade" TEXT NOT NULL,
    "nivel" TEXT NOT NULL,
    "valorInscricao" REAL NOT NULL,
    "dataRealizacao" DATETIME,
    CONSTRAINT "Categoria_torneioId_fkey" FOREIGN KEY ("torneioId") REFERENCES "Torneio" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Jogador_email_key" ON "Jogador"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Jogador_usuarioId_key" ON "Jogador"("usuarioId");

-- CreateIndex
CREATE UNIQUE INDEX "Dupla_participante1_participante2_categoriaId_key" ON "Dupla"("participante1", "participante2", "categoriaId");

-- CreateIndex
CREATE UNIQUE INDEX "Categoria_torneioId_genero_modalidade_nivel_key" ON "Categoria"("torneioId", "genero", "modalidade", "nivel");
