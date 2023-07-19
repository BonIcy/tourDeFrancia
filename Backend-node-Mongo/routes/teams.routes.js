import express  from "express";

let router = express();

import { obtenerTeams,agregarTeams,selectOne,borrarTeams,actualizarTeams } from "../controllers/teams.controller.js";

router.get("/all",obtenerTeams);
router.post("/add", agregarTeams);
router.delete("/del/:id", borrarTeams);
router.get("/one/:id", selectOne);
router.put("/upd/:id", actualizarTeams);

export default router;