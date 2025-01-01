const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

const userSchema=new mongoose.Schema({
        firstname:{
            type:String,
            required:true,
            minLength:[3,'the firstname must be at least 3 characters long']
        },
    email:{
        type:String,
        required:true,
        unique:true,
        minLength:[5,"email should be atleast 5 length long"]

    },
    password:{
        type:String,
        required:true,
        select :false

    },
    socketId:{
        type:String

    }

})

userSchema.methods.generateAuthToken=function(){
    const token=jwt.sign({_id:this._id},process.env.JWT_SECRET)
    return token
}
userSchema.methods.comparePassword=async function (password){
return await bcrypt.compare(password,this.password)
}
userSchema.statics.hashPassword=async (password)=>{
    return await bcrypt.hash(password,10)
}
module.exports=mongoose.model('User',userSchema)