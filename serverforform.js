import express from "express"
import path from "path"

const app=express()
const PORT=5000
app.set("view engine","ejs")

const userdetails=[]

//To extract the form data
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.render("form")
})

app.get('/success',(req,res)=>{
    res.render("success")
})

app.post('/submit',(req,res)=>{
    const details=req.body
    userdetails.push({name:details.name,email:details.email})
    res.redirect('/success')
})

//show the user's details
app.get('/users',(req,res)=>{
   res.json({userdetails})
})

app.listen(PORT,()=>{
    console.log(`App is listening on port:${PORT}`)
})