import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
    try {
        let eventos = await prisma.tb_evento.findMany();
        return res.status(200).send(eventos)
    } catch (err) {
        return res.status(400).send({
            msg: "Erro ao listar tb_eventos",
            error: err
        })
    }

})

router.post('/', async (req, res) => {
    try {
        const { evento, endereco } = req.body
        await prisma.tb_evento.create({
            data: evento,
            endereco: {
                create: endereco
            }
        });
        return res.status(200).send({
            msg: "Evento criado com sucesso",
        });
    } catch (err) {
        return res.status(400).send({
            msg: "Erro ao adicionar evento no banco de dados",
            error: err
        });
    }
})

router.patch('/', async (req, res) => {
    try {
        const {id, ...patchDataEvent} = req.body;
        await prisma.tb_evento.update({
            where: {
                id: Number(id)
            },
            data: patchDataEvent
        });
        return res.status(200).send({
            msg: "Evento alterado com sucesso"
        });
    } catch (err) {
        return res.status(400).send({
            msg: "Erro ao alterar evento",
            error: err
        });
    }
})

router.delete('/', async (req, res) => {
    try{
        const id = Number(req.body.id);
        await prisma.tb_evento.delete({
            where: {
                id: id
            }
        });
        return res.status(200).send({
            msg: "Evento deletado com sucesso"
        });
    } catch (err) {
        return res.status(400).send({
            msg: "Erro ao deletar evento",
            error: err
        });
    }
})

export default router;