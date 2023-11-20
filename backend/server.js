const express=require('express');

const app=require('./app.js');

const PORT=3400;

app.listen(PORT,()=>{
    console.log('listening at port',PORT);
})