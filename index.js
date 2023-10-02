// console.log("Chai aur code");
// import env files
require('dotenv').config()

const express = require("express")
const app = express()

app.get("/", (req,res)=>{
    res.send("Hello World!!")
})

app.get("/tweeter", (req,res) =>{
    res.send("hiteshdotcom")
})

app.get("/login" , (req,res) =>{
    res.send("<h1>Please login to Chai aur code </h1>")
})

app.get("/youtube" , (req,res)=>{
    res.send("<h2>Chai aur code</h2>")
})

app.listen(process.env.PORT,()=>{
    console.log(`App is listening on port ${process.env.PORT}`,);
})