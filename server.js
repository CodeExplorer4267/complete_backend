import express from "express"
import path from "path"
const app=express();
const PORT=5000;
app.set("view engine","ejs")

// app.get('/',(req,res)=>{
    //----This is about status code-----
//     // res.sendStatus(200)//OK
//     // res.sendStatus(403)//Forbidden
//     // res.sendStatus(404)//Not Found
//     // res.sendStatus(500)//Internal Server Error
//    --------------------------------------------
//    ------This is about json data-----
//     // res.json({//to send the json data
//     //     success:true,
//     //     products:[]
//     // })
//     //-----This is about pathlocation----
//     // const pathlocation=path.resolve();
//     // res.sendFile(path.join(pathlocation,"index.html"))
// })
app.use(express.static(path.join(path.resolve(),"public")))//This is how we can serve the static files

app.get('/',(req,res)=>{
    //this is how we can load an ejs file
    // res.render("index",{
    //     age1:23,
    //     age2:56
    // })
     res.sendFile("index") //--->We can serve the static files 
    // res.render("index")//---->We can serve or render the index.ejs file
})
app.get('/contact',(req,res)=>{
    res.send("This is Contact page")
})
app.get('/profile',(req,res)=>{
    res.send("<h1>This is Profile Page</h1>")//er moddheo html diye lekha jabe
})

app.listen(PORT,()=>{
    console.log("Server is listening ")
})