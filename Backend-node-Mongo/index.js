import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/config.js";
import cors from "cors";
import corredoresRouter from "./routes/corredores.routes.js"
import etapasRouter from "./routes/etapas.routes.js"
import teamsRouter from "./routes/teams.routes.js"
import premiosRouter from "./routes/premios.routes.js"

let app = express();


let configCors = {
    method:["GET", "POST", "PUT", "DELETE"]
};

app.use(express.json());

app.use(cors(configCors));

app.use("/corredores",corredoresRouter);
app.use("/etapas",etapasRouter);
app.use("/teams",teamsRouter);
app.use("/premios",premiosRouter);

dotenv.config();

let PORT = process.env.PORT

conectarDB();

app.listen();

app.listen(PORT,()=>{
    console.log(`The France Tour Server is listen on port ${PORT}`);
})