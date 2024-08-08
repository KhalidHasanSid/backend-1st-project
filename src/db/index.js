import mongoose from "mongoose";
import{db_name} from "../constants.js"

const connectDB= async ()=>{

    try{
        const connectionInstanse =await mongoose.connect(`${process.env.DB_URL}/${db_name}`)
        console.log("DATABASE IS CONNECTERD ",connectionInstanse.connection.host)
    }
    catch(error){
        console.error("NOT Connected to the database",error)

    }

   

}
export default connectDB;

