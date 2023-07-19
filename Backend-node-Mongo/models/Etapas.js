import mongoose from "mongoose";
let etapaSchema = mongoose.Schema({
    numero:{
        type: Number,
        require: true,
        trim: true,
    },
    fecha:{
        type: String,
        require: true,
        trim: true,
    },
    salida:{
        type: String,
        require: true,
        trim: true,
    },
    llegada:{
        type: String,
        require: true,
        trim: true,
    },
    distancia:{
        type: Number,
        require: true,
        trim: true,
    }
    },
    {
        timestamps: true,
    }
);
let Etapas = mongoose.model("Etapas", etapaSchema);
export default Etapas;