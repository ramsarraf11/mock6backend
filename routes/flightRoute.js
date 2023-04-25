const { Router } = require("express");
const { flightModel } = require("../models/flightModel");

const flight = Router();


flight.get("/flights", async (req, res) => {
    try {
        let data = await flightModel.find()
        res.status(200).send(data)
    } catch (error) {
        console.log(error)
    }
})

flight.get("/flights/:id", async (req, res) => {
    let ID = req.params.id
    try {
        let data = await flightModel.findById({ _id: ID })
        res.status(200).send(data)
    } catch (error) {
        console.log(error)
    }
})


flight.post("/flights", async (req, res) => {
    let data = req.body;
    try {
        let new_data = new flightModel(data)
        await new_data.save()
        res.status(201).send("flightData added Successfully")
    } catch (error) {
        console.log(error)
    }
})

flight.patch("/flights/:id", async (req, res) => {
    let ID = req.params.id
    let updatedData = req.body
    try {
        await flightModel.findByIdAndUpdate({ _id: ID }, updatedData)
        res.status(204).send(`data got updated with the id : ${ID}`)
    } catch (error) {
        console.log(error)
    }
})

flight.delete("/flights/:id", async (req, res) => {
    let ID = req.params.id
    try {
        await flightModel.findByIdAndDelete({ _id: ID })
        res.status(202).send(`data got deleted with the id : ${ID}`)
    } catch (error) {
        console.log(error)
    }
})

module.exports = {
    flight
}