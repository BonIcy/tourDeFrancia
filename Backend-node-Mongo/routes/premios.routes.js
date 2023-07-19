import express  from "express";
import {check} from 'express-validator';
import validateDocuments from "../middlewares/validate.documents.js";
import Corredores from "../models/Corredores.js";
let router = express();

import { obtenerPremios,agregarPremios,selectOne,borrarPremios,actualizarPremios } from "../controllers/premios.controller.js";

router.get("/all",obtenerPremios);
router.post("/add"[
    check('nombre', 'Nombre requeridoo').not().isEmpty(),
    check('ganador').custom(async(ganador = '')=>{
        let ganadorExistente = await Corredores.findOne({ganador});
        if(!ganadorExistente){
            throw new Error(`El corredor ${ganador} no anda registrado`)
        }
    }),
    validateDocuments
], agregarPremios);
router.delete("/del/:id", borrarPremios);
router.get("/one/:id", selectOne);
router.put("/upd/:id", actualizarPremios);

export default router;