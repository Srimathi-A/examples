const mongoose=require('mongoose')
const jwt=require('jsonwebtoken')
const Joi=require('joi')
const passwordComplexity=require('joi-password-complexity')

const userSchema=new mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,require:true},
    email:{type:String,require:true},
    password:{type:String,require:true}
})

const User=mongoose.model("user",userSchema)

const validate =(data)=>{
    const schema=Joi.object({
        firstName:Joi.string().require().label("First Name"),
        lastName:Joi.string().require().label("Last Name"),
        email:Joi.string().email().require().label("Email"),
        password:Joi.passwordComplexity().require().label("Password"),

    });

return schema.validate(data);
};
    module.exports={User,validate};
