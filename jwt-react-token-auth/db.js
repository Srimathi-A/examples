const mongoose = require('mongoose')

module.exports = ()=>{
    try{
        mongoose.connect(process.env.DB)
        console.log('Connect to database successfully')
    }
    catch(error){
        console.log(error)
        console.log("Could not connect to database")
    }
}