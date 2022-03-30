const express=require("express");
const morgan=require("morgan");
const path=require("path");
const cors=require("cors")

//base de datos

// const connection = require("./db/db")


//server

const server=express();

//middleware

server.use(express.json())
server.use(morgan("dev"))
server.use(cors())
require("dotenv").config()

// PORT

const PORT=process.env.PORTEXPRESS;  

// Routes

server.use("/acta",require("./routes/Acta/Acta"))

//function listen

server.listen(PORT,()=>{
    console.log(`express esta corriendo ${PORT}`)

})

