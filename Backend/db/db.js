const mongoose=require('mongoose')
const connectodb=()=>{

    mongoose.connect(process.env.DB_URL)
    .then(()=>console.log('Connected to database'))
    .catch((err)=>console.log(err))

}
module.exports=connectodb