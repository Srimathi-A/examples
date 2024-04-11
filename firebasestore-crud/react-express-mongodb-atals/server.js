const express=require('express')
const mongoose=require('mongoose')
const DataModel=require('./DataModel')
const connectDB=require('./Database')
const cors=require('cors')

//connection
connectDB();

const app=express();
app.use(express.json())
app.use(cors())

app.get('/readfromserver',(req,res)=>{
    res.json({message:"Hey Dude from server"})
})

app.post('/writeodatabase',async(req,res)=>{
    try{
        const {content}=req.body
        const newData=new DataModule({connect})
        await newData.save()
        res.json({messsge:"Data Saved Successfully"})
    }
    catch(error){
        console.log(error.message)
        res.status(500).send({message:"server error while saving data"})
    }
})



const PORT=process.env.PORT || 8080
app.listen(PORT,()=>{
    console.log(`server is running on PORT ${PORT}`)

})