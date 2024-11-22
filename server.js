import express from "express"
import path from "path"
const app=express();
const PORT=5000;
app.set("view engine","ejs")

app.get('/',(req,res)=>{
    // res.sendStatus(200)//OK
    // res.sendStatus(403)//Forbidden
    // res.sendStatus(404)//Not Found
    // res.sendStatus(500)//Internal Server Error
    // res.json({//to send the json data
    //     success:true,
    //     products:[]
    // })
    const pathlocation=path.resolve();
    res.sendFile(path.join(pathlocation,"index.html"))
})

app.get('/contact',(req,res)=>{
    res.send("This is Contact page")
})
app.get('/profile',(req,res)=>{
    res.send("<h1>This is Profile Page</h1>")//er moddheo html diye lekha jabe
})

app.listen(PORT,()=>{
    console.log("Server is listening")
})