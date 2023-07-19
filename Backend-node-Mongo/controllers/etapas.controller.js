import Etapas from "../models/Etapas.js";

let obtenerEtapas = async (req,res) =>{

    let etapas = await Etapas.find();

    res.json(etapas)
}

let agregarEtapas = async (req, res)=>{
    let etapas = new Etapas(req.body);
    try {
        let nuevaEtapa = await etapas.save();
        res.json(nuevaEtapa);
    } catch (error) {
        console.log(error);
    }
};

let borrarEtapas = async (req, res)=>{
    try {
        await Etapas.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        res.status(404);
        res.send({error: "no existe"});
    }
};

let selectOne = async (req, res)=>{
    try {
        let etapas = await Etapas.findOne({_id:req.params.id});
        res.send(etapas);
    } catch (error) {
        res.status(404);
        res.send({error: "no existe"});
    }
}

let actualizarEtapas = async (req, res)=>{
    try {
        let etapas = await Etapas.findOne({_id:req.params.id});
        if (req.body.numero) {
            etapas.numero = req.body.numero;
        }
        if (req.body.fecha) {
            etapas.fecha = req.body.fecha;
        }
        if (req.body.salida) {
            etapas.salida = req.body.salida;
        }
        if (req.body.llegada) {
            etapas.llegada = req.body.llegada;
        }
        if (req.body.distancia) {
            etapas.distancia = req.body.distancia;
        }
        await etapas.save();
        res.send(etapas);
    } catch (error) {
        res.status(404);
        res.send({error: "no existe"});
    }
};


export {obtenerEtapas,borrarEtapas,actualizarEtapas,selectOne,agregarEtapas};