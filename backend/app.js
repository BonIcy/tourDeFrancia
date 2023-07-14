import express  from "express";
import dotenv from "dotenv";
import conectarDB from "./config/config.js";
import routerClientes from "./routes/cliente.routes.js";
import routerEquipos from "./routes/equipo.routes.js";
import routerEtapas from "./routes/etapa.routes.js";
import routerPremios from "./routes/premios.routes.js";
let app = express();
app.use(express.json());
dotenv.config();
app.use("/cilcista", routerClientes);
app.use("/equipos", routerEquipos);
app.use("/etapas", routerEtapas);
app.use("/premios", routerPremios);
let PORT = process.env.PORT;
conectarDB();
app.listen();
app.listen(PORT, ()=>{
    console.log(`Listen on port ${PORT}`);
})