UPDATE "Jogador"
SET "usuarioId" = (
    SELECT "Usuario"."id"
    FROM "Usuario"
    WHERE "Usuario"."email" = "Jogador"."email"
    LIMIT 1
)
WHERE "Jogador"."usuarioId" IS NULL
  AND EXISTS (
    SELECT 1
    FROM "Usuario"
    WHERE "Usuario"."email" = "Jogador"."email"
  );
