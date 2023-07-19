import Teams from "../models/Teams.js";

let obtenerTeams = async (req,res) =>{

    let teams = await Teams.find();

    res.json(teams)
}

let agregarTeams = async (req, res)=>{
    let teams = new Teams(req.body);
    try {
        let nuevoTeams = await teams.save();
        res.json(nuevoTeams);
    } catch (error) {
        console.log(error);
    }
};

let borrarTeams = async (req, res)=>{
    try {
        await Teams.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        res.status(404);
        res.send({error: "Teams no existe"});
    }
};

let selectOne = async (req, res)=>{
    try {
        let teams = await Teams.findOne({_id:req.params.id});
        res.send(teams);
    } catch (error) {
        res.status(404);
        res.send({error: "Teams no existe"});
    }
}

let actualizarTeams = async (req, res)=>{
    try {
        let team = await Teams.findOne({_id:req.params.id});
        if (req.body.nombre) {
            team.nombre = req.body.nombre;
        }
        if (req.body.pais) {
            team.pais = req.body.pais;
        }
        if (req.body.corredores) {
            team.corredores = req.body.corredores;
        }
       
        await team.save();
        res.send(team);
    } catch (error) {
        res.status(404);
        res.send({error: "team no existe"});
    }
};


export {obtenerTeams,borrarTeams,actualizarTeams,selectOne,agregarTeams};