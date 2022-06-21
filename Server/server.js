const express=require("express");
const app=express();
const tsks=require('./routes/tasks')
const connectDB=require('./db/connect')

//middleware
app.use(express.json())
// routes
// app.get('/',(req,resp)=>
// {
//     resp.send("Ramesh");
// })

app.use('/api/v1/tasks',tsks)

const port=3000

const start=async()=>{
    try{
            await connectDB();
            app.listen(port,console.log('ashish starte ..'+port));
    }catch(error)
    {
        console.log(error)
    }
}

start()
