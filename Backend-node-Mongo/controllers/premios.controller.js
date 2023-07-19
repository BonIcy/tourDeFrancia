import Premios from "../models/Premios.js";

let obtenerPremios = async (req,res) =>{

    let premios = await Premios.find();

    res.json(premios)
}

let agregarPremios = async (req, res)=>{
    let {nombre, descripcion, premio_en_efectivo, ganador} = req.body;
    let premios = new Premios({nombre, descripcion, premio_en_efectivo, ganador})
    let ganadorExistente = await Premios.findOne({ganador});
    if (ganadorExistente){
        return res.status(404).json({
            
        })
    }
    try {
        let nuevoPremio = await premios.save();
        res.json(nuevoPremio);
    } catch (error) {
        console.log(error);
    }
};

let borrarPremios = async (req, res)=>{
    try {
        await Premios.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        res.status(404);
        res.send({error: "Premios no existe"});
    }
};

let selectOne = async (req, res)=>{
    try {
        let premios = await Premios.findOne({_id:req.params.id});
        res.send(premios);
    } catch (error) {
        res.status(404);
        res.send({error: "Premios no existe"});
    }
}

let actualizarPremios = async (req, res)=>{
    try {
        let premio = await Premios.findOne({_id:req.params.id});
        if (req.body.nombre) {
            premio.nombre = req.body.nombre;
        }
        if (req.body.descripcion) {
            premio.descripcion = req.body.descripcion;
        }
        if (req.body.premio_en_efectivo) {
            premio.premio_en_efectivo = req.body.premio_en_efectivo;
        }
       
        await premio.save();
        res.send(premio);
    } catch (error) {
        res.status(404);
        res.send({error: "Premio no existe"});
    }
};


export {obtenerPremios,borrarPremios,actualizarPremios,selectOne,agregarPremios};