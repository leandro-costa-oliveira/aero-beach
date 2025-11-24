INSERT INTO "Categorias" ("id", "torneioId", "genero", "modalidade", "valorInscricao")
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
  "valorInscricao"
FROM "Torneios";