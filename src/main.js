import express from "express";
import cors from "cors";
import "dotenv/config";
import inscrito from "./routes/inscrito.js";
import evento from "./routes/evento.js";

const app = express()

app.use(express.json())
app.use(cors({
    origin: '*'
}))

app.use('/inscrito', inscrito);
app.use('/evento', evento);

app.listen(process.env.SERVER_PORT, () => {
    console.log("server on")
})