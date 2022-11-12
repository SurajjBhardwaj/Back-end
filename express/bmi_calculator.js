const express=require("express");
const bodyParser = require('body-parser');
const urlencode = require('urlencode');
 

const app=express();


app.use(bodyParser.urlencoded({ extended: true }))


app.get("/",function (req,res) {

    var a=6;
    var b=9;
    var total=a+b;
    console.log(total);
    res.sendFile(__dirname+"/index.html");

})

app.post("/",function (req,res) {

    const num1=Number(req.body.num1);
    const num2=Number(req.body.num2);
    const result=Number(num1 + num2);
    console.log(num1);
    console.log(num2);
    console.log(result);
    res.send("the calculation is : " + result );

})


app.listen(5000, function () {
    
    console.log("it's working");
    
    });