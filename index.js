const express = require("express")
const { connection } = require("./config/db")
const { booking } = require("./routes/bookingRoute")
const { flight } = require("./routes/flightRoute")
const { user } = require("./routes/userRoute")
require("dotenv").config()
const app = express()

// For data
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Flight Home Page")
})

app.use("/api",user,flight,booking)

app.listen((process.env.port),async()=>{
    try {
        await connection
        console.log("db is connected")
    } catch (error) {
        console.log(error)
    }
    console.log(`server is on at ${process.env.port}`)
})