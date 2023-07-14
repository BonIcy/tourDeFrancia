import mongoose from "mongoose";
let conectarDB = async () =>{
    try {
        let conectionDB = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        let url = `SERVER: ${conectionDB.connection.host} - PORT: ${conectionDB.connection.port}`;
        console.log(url);
    } catch (error) {
        console.log(`${error.message}`);
        process.exit(1);
    }
}
export default conectarDB;