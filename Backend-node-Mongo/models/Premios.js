import mongoose from "mongoose";
let premioSchema = mongoose.Schema({
    nombre:{
        type:String,
        require: true,
        trim: true
    },
    descripcion:{
        type:String,
        require:true,
        trim: true
    },
    premio_en_efectivo:{
        type: String,
        require: true,
        trim: true
    },
    ganador:{
        type:String,
        require:true,
        trim:true
    }
    },
    {
        timestamps: true,
    }
);
let Premios = mongoose.model("Premios", premioSchema);
export default Premios;