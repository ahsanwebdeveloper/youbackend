import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
const connectdb= async ()=>{
   try {
     const connectionItances= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
     console.log(`/n mongodb is connect !! DB HOST ${connectionItances.connection.host}`)
    
   } catch (error) {
    console.log("mongodb connection error",error);
    process.exit(1)
   }
}
export default connectdb