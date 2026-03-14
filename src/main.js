import express from "express";
import cors from "cors";
import "dotenv/config"
import { PrismaClient } from "@prisma/client";

const app = express()
const prisma = new PrismaClient()

app.use(express.json())
app.use(cors({
    origin: '*'
}))

app.get('/', async (req, res) => {
    try {
        let users = await prisma.participante.findMany();
        return res.status(200).send(users)
    } catch (err) {
        return res.status(400).send({
            msg: "Erro ao listar participantes",
            error: err
        })
    }

})

app.post('/', async (req, res) => {
    try {
        const user = req.body
        await prisma.participante.create({
            data: user
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

app.patch('/', async (req, res) => {
    try {
        const {id, ...patchDataUser} = req.body;
        await prisma.participante.update({
            where: {
                id: Number(id)
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

app.delete('/', async (req, res) => {
    try{
        const id = Number(req.body.id);
        await prisma.participante.delete({
            where: {
                id: id
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

app.listen(process.env.SERVER_PORT, () => {
    console.log("server on")
})