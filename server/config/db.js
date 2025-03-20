import mongoose from "mongoose";

export const connect = async()=>{
    try{
        const conn = await mongoose.connect(process.env.DB_URI , {dbName:"Emma-burger-place"} )
        console.log(`MongoDb connected: ${conn.connection.host}`);
        
    }catch(error){
        console.log(`Error connecting to MongoDB: ${error.message}`);
        process.exit(1)
        
    }
}