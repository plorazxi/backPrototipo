-- CreateTable
CREATE TABLE "Participante" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "matricula" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "curso" TEXT NOT NULL,

    CONSTRAINT "Participante_pkey" PRIMARY KEY ("id")
);
