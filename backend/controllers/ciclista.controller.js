let getCiclista = (req, res)=>{
    res.json({
        "message":"Home page :D"
    });
}
let postCiclista = (req, res)=>{
    res.json({
        "message":"Post api :D"
    });
}
let deleteCiclista = (req, res)=>{
    res.json({
        "message":"delete api :D"
    });
}
let putCiclista = (req, res)=>{
    res.json({
        "message":"put api :D"
    });
}
let patchCiclista = (req, res)=>{
    res.json({
        "message":"patch api :D"
    });
} 
module.exports = {
    getCiclista,
    postCiclista,
    deleteCiclista,
    putCiclista,
    patchCiclista
}