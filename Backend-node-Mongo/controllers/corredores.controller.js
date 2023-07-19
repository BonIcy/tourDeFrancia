import Corredores from "../models/Corredores.js";

let obtenerCorredores = async (req,res) =>{

    let corredores = await Corredores.find();

    res.json(corredores)
}

let agregarCorredores = async (req, res)=>{
    let {nombre, equipo, edad, nacionalidad} = req.body;
    let corredores = new Corredores({nombre, equipo, edad, nacionalidad});

    let teamExistente = await Corredores.findOne({equipo});
    if(teamExistente){
        return res.status(400).json({
        })
    }
    try {
        let nuevosCorredores = await corredores.save();
        res.json(nuevosCorredores);
    } catch (error) {
        console.log(error);
    }
};

let borrarCorredores = async (req, res)=>{
    try {
        await Corredores.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        res.status(404);
        res.send({error: "no existe"});
    }
};

let selectOne = async (req, res)=>{
    try {
        let corredores = await Corredores.findOne({_id:req.params.id});
        res.send(corredores);
    } catch (error) {
        res.status(404);
        res.send({error: "no existe"});
    }
}

let actualizarCorredores = async (req, res)=>{
    try {
        let corredor = await Corredores.findOne({_id:req.params.id});
        if (req.body.nombre) {
            corredor.nombre = req.body.nombre;
        }
        if (req.body.equipo) {
            corredor.equipo = req.body.equipo;
        }
        if (req.body.edad) {
            corredor.edad = req.body.edad;
        }
        if (req.body.nacionalidad) {
            corredor.nacionalidad = req.body.nacionalidad;
        }
        await corredor.save();
        res.send(corredor);
    } catch (error) {
        res.status(404);
        res.send({error: "no existe"});
    }
};


export {obtenerCorredores,borrarCorredores,actualizarCorredores,selectOne,agregarCorredores};