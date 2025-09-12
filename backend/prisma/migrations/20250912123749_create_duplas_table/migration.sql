-- CreateTable
CREATE TABLE "duplas" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "participante1" TEXT NOT NULL,
    "participante2" TEXT NOT NULL,
    CONSTRAINT "duplas_participante1_fkey" FOREIGN KEY ("participante1") REFERENCES "Jogadores" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "duplas_participante2_fkey" FOREIGN KEY ("participante2") REFERENCES "Jogadores" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "duplas_participante1_participante2_key" ON "duplas"("participante1", "participante2");
