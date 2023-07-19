import express  from "express";

let router = express();

import { obtenerEtapas,agregarEtapas,selectOne,borrarEtapas,actualizarEtapas } from "../controllers/etapas.controller.js";

router.get("/all",obtenerEtapas);
router.post("/add", agregarEtapas);
router.delete("/del/:id", borrarEtapas);
router.get("/one/:id", selectOne);
router.put("/upd/:id", actualizarEtapas);

export default router;