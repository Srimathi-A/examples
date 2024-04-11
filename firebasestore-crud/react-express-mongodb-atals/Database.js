require("dotenv").config()
const mongoose =require("mongoose")

const uri=process.env.MONGODB_URI

const connectDB=async()=>{
    try{
        await mongoose.connect(uri);
        console.log("MongoDB Connected Successfully")
    }
    catch(error){
        console.log("Could not connect: ",error.message)
    }
}
module.exports=connectDB;