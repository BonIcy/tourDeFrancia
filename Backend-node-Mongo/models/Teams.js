import mongoose from "mongoose";
let teamSchema = mongoose.Schema({

    nombre:{
        type: String,
        require: true,
        trim: true,
    },
    pais:{
        type: String,
        require: true,
        trim: true,
    },
    corredores:{
        type: Array,
        require: true,
        trim: true,
    }
    },
    {
        timestamps: true,
    }
);
let Teams = mongoose.model("Teams", teamSchema);
export default Teams;