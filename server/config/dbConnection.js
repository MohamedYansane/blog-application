import mongoose from "mongoose";
const bdConnection = async () =>{
    try{
        const connection = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("Connexion established: ", connection.connection.name)
    }catch(error)
    {
        console.log(error.message);
        process.exit(1);
    }
}
export default bdConnection;