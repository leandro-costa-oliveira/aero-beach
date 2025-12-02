-- CreateTable
CREATE TABLE "Categorias" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "torneioId" TEXT NOT NULL,
    "genero" TEXT NOT NULL,
    "modalidade" TEXT NOT NULL,
    "nivel" TEXT NOT NULL,
    "valorInscricao" REAL NOT NULL,
    "dataRealizacao" DATETIME,
    CONSTRAINT "Categorias_torneioId_fkey" FOREIGN KEY ("torneioId") REFERENCES "Torneios" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

INSERT INTO "Categorias" ("id", "torneioId", "genero", "modalidade", "valorInscricao", "nivel", "dataRealizacao")
SELECT 
 (lower(
            hex(randomblob(4)) || '-' ||
            hex(randomblob(2)) || '-' ||
            '4' || substr(hex(randomblob(2)), 2) || '-' ||
            substr('89ab', abs(random()) % 4 + 1, 1) ||
            substr(hex(randomblob(2)), 2) || '-' ||
            hex(randomblob(6))
       )),
  "id", 
  "tipo", 
  "modalidade", 
  "valorInscricao",
  "categoria",
  "dataRealizacao"
FROM "Torneios";

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
    CONSTRAINT "Duplas_categoriasId_fkey" FOREIGN KEY ("categoriasId") REFERENCES "Categorias" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

INSERT INTO "new_Duplas" ("id", "participante1", "participante2", "torneioId", "categoriasId") 
SELECT 
	d.id, 
	d.participante1, 
	d.participante2, 
	d.torneioId,
	c.id as categoriaId
FROM Duplas as d
JOIN Torneios as t on t.id = d.torneioId
JOIN Categorias as c on t.id = c.torneioId;


DROP TABLE "Duplas";
ALTER TABLE "new_Duplas" RENAME TO "Duplas";
CREATE UNIQUE INDEX "Duplas_participante1_participante2_key" ON "Duplas"("participante1", "participante2", "categoriasId");

CREATE TABLE "new_Inscricoes" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "torneioId" TEXT NOT NULL,
    "jogadorId" TEXT NOT NULL,
    "pago" BOOLEAN NOT NULL DEFAULT false,
    "dataPagamento" DATETIME,
    "categoriasId" TEXT,
    CONSTRAINT "Inscricoes_torneioId_fkey" FOREIGN KEY ("torneioId") REFERENCES "Torneios" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Inscricoes_jogadorId_fkey" FOREIGN KEY ("jogadorId") REFERENCES "Jogadores" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Inscricoes_categoriasId_fkey" FOREIGN KEY ("categoriasId") REFERENCES "Categorias" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Inscricoes" ("dataPagamento", "id", "jogadorId", "pago", "torneioId", "categoriasId") 
SELECT 
i.dataPagamento,
i.id,
i.jogadorId,
i.pago,
i.torneioId ,
c.id,
FROM Inscricoes as i
JOIN Torneios as t ON i.torneioId = t.id
JOIN Categorias as c ON t.id = c.torneioId;

DROP TABLE "Inscricoes";
ALTER TABLE "new_Inscricoes" RENAME TO "Inscricoes";
CREATE TABLE "new_Torneios" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT,
    "dataInicio" DATETIME NOT NULL,
    "dataRealizacao" DATETIME,
    "dataLimiteInscricao" DATETIME NOT NULL,
    "valorInscricao" REAL NOT NULL,
    "tipo" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "modalidade" TEXT NOT NULL,
    "federado" BOOLEAN NOT NULL DEFAULT false,
    "situacao" TEXT NOT NULL DEFAULT 'aberto'
);
INSERT INTO "new_Torneios" ("categoria", "dataInicio", "dataLimiteInscricao", "dataRealizacao", "federado", "id", "modalidade", "nome", "tipo", "valorInscricao") SELECT "categoria", "dataInicio", "dataLimiteInscricao", "dataRealizacao", "federado", "id", "modalidade", "nome", "tipo", "valorInscricao" FROM "Torneios";
DROP TABLE "Torneios";
ALTER TABLE "new_Torneios" RENAME TO "Torneios";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "Categorias_torneioId_genero_modalidade_nivel_key" ON "Categorias"("torneioId", "genero", "modalidade", "nivel");
