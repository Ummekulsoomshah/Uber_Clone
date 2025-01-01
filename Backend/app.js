const dotenv=require('dotenv').config()
const cors=require('cors')
const express=require('express')
const cookieParser=require('cookie-parser')
const connectodb=require('./db/db')
const userRoute=require('./routes/user.route')

const app=express()
app.use(cors())
connectodb()
app.use(cookieParser())
app.get('/',(req,res)=>{
    console.log('hello world')
})
app.use(express.json())
app.use('/user',userRoute)


module.exports=app