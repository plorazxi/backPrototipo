import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
    try {
        let users = await prisma.tb_inscrito.findMany();
        return res.status(200).send(users)
    } catch (err) {
        return res.status(400).send({
            msg: "Erro ao listar tb_inscritos",
            error: err
        })
    }

})

router.post('/', async (req, res) => {
    try {
        const { user, endereco } = req.body
        await prisma.tb_inscrito.create({
            data: user,
            endereco: {
                create: endereco
            }
        });
        return res.status(200).send({
            msg: "Usuário criado com sucesso",
        });
    } catch (err) {
        return res.status(400).send({
            msg: "Erro ao adicionar usuário no banco de dados",
            error: err
        });
    }
})

router.patch('/', async (req, res) => {
    try {
        const {id, ...patchDataUser} = req.body;
        await prisma.tb_inscrito.update({
            where: {
                id_inscrito: Number(id)
            },
            data: patchDataUser
        });
        return res.status(200).send({
            msg: "Usuário alterado com sucesso"
        });
    } catch (err) {
        return res.status(400).send({
            msg: "Erro ao alterar usuário",
            error: err
        });
    }
})

router.delete('/', async (req, res) => {
    try{
        const id = Number(req.body.id);
        await prisma.tb_inscrito.delete({
            where: {
                id_inscrito: id
            }
        });
        return res.status(200).send({
            msg: "Usuário deletado com sucesso"
        });
    } catch (err) {
        return res.status(400).send({
            msg: "Erro ao deletar usuário",
            error: err
        });
    }
})

export default router;