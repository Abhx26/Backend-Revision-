import mongoose from "mongoose"

import { DB_NAME } from "../constants.js"
const connectDB=async()=>{
    try {
        const connection=await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        
        console.log(connection)
        console.log("MongoDB CONNECTED SUCESS");
        
    } catch (error) {
        console.log("DB NOT CONNECTED",error)
        
    }
}
export default connectDB;