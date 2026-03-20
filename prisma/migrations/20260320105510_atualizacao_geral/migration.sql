-- CreateTable
CREATE TABLE "tb_endereco" (
    "id_endereco" SERIAL NOT NULL,
    "rua" VARCHAR(150),
    "numero" VARCHAR(10),
    "bairro" VARCHAR(100),
    "cidade" VARCHAR(100),
    "estado" VARCHAR(50),
    "cep" VARCHAR(10),
    "tipo_local" VARCHAR(50),

    CONSTRAINT "tb_endereco_pkey" PRIMARY KEY ("id_endereco")
);

-- CreateTable
CREATE TABLE "tb_inscrito" (
    "id_inscrito" SERIAL NOT NULL,
    "nome_inscrito" VARCHAR(200),
    "email" VARCHAR(200),
    "curso" VARCHAR(200),
    "num_matricula" VARCHAR(11),
    "id_endereco" INTEGER,

    CONSTRAINT "tb_inscrito_pkey" PRIMARY KEY ("id_inscrito")
);

-- CreateTable
CREATE TABLE "tb_evento" (
    "id_evento" SERIAL NOT NULL,
    "id_inscrito" INTEGER,
    "nome_evento" VARCHAR(200),
    "centro_academico" VARCHAR(40),
    "local_campus" VARCHAR(100),
    "id_endereco" INTEGER,
    "data_evento" DATE,

    CONSTRAINT "tb_evento_pkey" PRIMARY KEY ("id_evento")
);

-- CreateTable
CREATE TABLE "tb_destaques" (
    "id_destaque" SERIAL NOT NULL,
    "id_evento" INTEGER,

    CONSTRAINT "tb_destaques_pkey" PRIMARY KEY ("id_destaque")
);

-- AddForeignKey
ALTER TABLE "tb_inscrito" ADD CONSTRAINT "tb_inscrito_id_endereco_fkey" FOREIGN KEY ("id_endereco") REFERENCES "tb_endereco"("id_endereco") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tb_evento" ADD CONSTRAINT "tb_evento_id_inscrito_fkey" FOREIGN KEY ("id_inscrito") REFERENCES "tb_inscrito"("id_inscrito") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tb_evento" ADD CONSTRAINT "tb_evento_id_endereco_fkey" FOREIGN KEY ("id_endereco") REFERENCES "tb_endereco"("id_endereco") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tb_destaques" ADD CONSTRAINT "tb_destaques_id_evento_fkey" FOREIGN KEY ("id_evento") REFERENCES "tb_evento"("id_evento") ON DELETE CASCADE ON UPDATE CASCADE;
