import express  from "express";
import {check} from 'express-validator';
import validateDocuments from "../middlewares/validate.documents.js";

import Teams from '../models/Teams.js'
let router = express();

import { obtenerCorredores,agregarCorredores,selectOne,borrarCorredores,actualizarCorredores } from "../controllers/corredores.controller.js";

router.get("/all",obtenerCorredores);
router.post("/add", [
    check('nombre', 'Nombre requerido').not().isEmpty(),
    check('team').custom(async(team = '')=>{
        let teamExistente = await Teams.findOne({equipo});
        if(!teamExistente){
            throw new Error(`El team ${team} no anda registrado XDDDDDDDDDDDDDDDD`)
        }
    }),
    validateDocuments
],agregarCorredores);
router.delete("/del/:id", borrarCorredores);
router.get("/one/:id", selectOne);
router.put("/upd/:id", actualizarCorredores);

export default router;