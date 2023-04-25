const { Router } = require("express");
const { flightModel } = require("../models/flightModel");
const { userModel } = require("../models/userModel");
const { bookingModel } = require("../models/bookingModel");


const booking = Router();


booking.post("/booking", async (req, res) => {
    let data = req.body;
    try {
        let new_data = new bookingModel(data)
        await new_data.save()
        res.status(201).send("flight booked Successfully")
    } catch (error) {
        console.log(error)
    }
})


booking.get("/dashboard", async (req, res) => {
    try {
        let flightData = await flightModel.find()
        let userData = await userModel.find()
        res.status(200).send({flightData,userData})
    } catch (error) {
        console.log(error)
    }
})

module.exports = { booking }