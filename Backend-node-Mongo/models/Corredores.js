import mongoose from "mongoose";
let corredoreSchema = mongoose.Schema({
    nombre:{
        type: String,
        require: true,
        trim: true,
    },
    equipo:{
        type: String,
        require: true,
        trim:true
    },
    edad:{
        type: Number,
        require: true,
        trim: true,
    },
    nacionalidad:{
        type: String,
        require: true,
        trim: true,
    }
    },
    {
        timestamps: true,
    }
);
let Corredores = mongoose.model("Corredores", corredoreSchema);
export default Corredores;