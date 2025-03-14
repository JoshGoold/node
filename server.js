const express = require("express")
const cors = require("cors")
require("dotenv").config()
const mongoose = require("mongoose")
const path = require('path')
const fs = require('fs')
const route = require('./routes/server/route')
const app = express()
const clearDir = require('./utils/clear_directory')

app.use(express.static(path.join(__dirname, "html")));



app.use(cors())
app.use(express.json())
app.use("/", route)


const port = process.env.EXPRESS_PORT||8050

// mongoose
// .connect(process.env.DB_CONNECT)
// .then(()=>{
//     console.log("Database Initialized\nServer Starting...")
//     console.log("Server Starting..")
//     console.log("Server Starting.")
    app.listen(port, '0.0.0.0', ()=> console.log(`Server Started Successfully!\nhttp://localhost:${port}`))
    clearDir()
    
// })
// .catch(e =>{
//     console.error(`Error connecting to database: ${e}`)
// })

const filepath = path.join(__dirname, "html", "index.html")

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, "html", "index.html"));
})


