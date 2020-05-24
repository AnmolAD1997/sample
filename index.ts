import express from 'express';

const app=express();

app.get('/',(req:any,res:any)=>{

res.send("Hello babies how you doing?");

});

app.listen(5000,()=>{

    console.log("server is created at  port: 5000");


});
