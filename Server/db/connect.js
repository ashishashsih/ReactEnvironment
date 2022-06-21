const mongoose=require('mongoose')

const connectionString='mongodb+srv://ashishchourey:BAZDmFNZxrjNdzIt@cluster0.1uny2zr.mongodb.net/?retryWrites=true&w=majority'

const connectDB=(url)=>{
    return mongoose.connect(connectionString)
    .then(()=>{console.log("Connected Successfully")})
    .then((error)=>console.log(error)) 
}

module.exports=connectDB
