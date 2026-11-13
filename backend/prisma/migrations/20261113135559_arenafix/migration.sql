-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Arena" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "endereco" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Arena" ("createdAt", "endereco", "id", "nome") SELECT "createdAt", "endereco", "id", "nome" FROM "Arena";
DROP TABLE "Arena";
ALTER TABLE "new_Arena" RENAME TO "Arena";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
