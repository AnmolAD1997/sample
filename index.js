let express=require('express');

let app=express();


app.use('/',(req,res)=>{

    res.send("Server is here babies!!");

})
console.log("Server creation statred");

app.listen(5000,()=>{


console.log("server create at: 5000");

});
