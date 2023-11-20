const express=require('express');
const authRouter=require('./router/authRoute');
const databaseConnect=require('./config/db')
const app=express();



app.use(express.json());
//database connection 
databaseConnect();

app.use('/',authRouter);
app.get('/auth',signUp,(req,res)=>{
    res.status(200).json(result);
})



module.exports=app;