const express=require('express');
const authRouter=require('./router/authRoute');
const databaseConnect=require('./config/db')
const cookieParser=require('cookie-parser');

const cors=require('cors');




const app=express();

app.use(cookieParser());
app.use(express.json());
app.use(cors());

//database connection 
databaseConnect();

app.use('/',authRouter);




module.exports=app;