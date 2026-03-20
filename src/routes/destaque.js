import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
    try {
        let destaques = await prisma.tb_destaques.findMany();
        return res.status(200).send(destaques)
    } catch (err) {
        return res.status(400).send({
            msg: "Erro ao listar tb_destaques",
            error: err
        })
    }

})

router.post('/', async (req, res) => {
    try {
        const destaque = req.body
        await prisma.tb_destaques.create({
            data: destaque
        });
        return res.status(200).send({
            msg: "Destaque criado com sucesso",
        });
    } catch (err) {
        return res.status(400).send({
            msg: "Erro ao adicionar destaque no banco de dados",
            error: err
        });
    }
})

router.delete('/', async (req, res) => {
    try{
        const id = Number(req.body.id);
        await prisma.tb_destaques.delete({
            where: {
                id_destaque: id
            }
        });
        return res.status(200).send({
            msg: "Destaque deletado com sucesso"
        });
    } catch (err) {
        return res.status(400).send({
            msg: "Erro ao deletar destaque",
            error: err
        });
    }
})

export default router;