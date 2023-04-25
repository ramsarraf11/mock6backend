const { Router } = require("express");
const { userModel } = require("../models/userModel");

const user = Router();


user.post("/register", async (req, res) => {
    let data = req.body;
    try {
        let new_data = new userModel(data)
        await new_data.save()
        res.status(201).send("User Registered Successfully")
    } catch (error) {
        console.log(error)
    }
})

user.post("/login", async (req, res) => {
    let { name, password } = req.body
    try {
        let new_data = await userModel.find({name})
        if (new_data.length > 0) {
            res.status(201).send("User LoggedIn Successfully")
        }else{
            res.status(404).send("User Not Found")
        }
    } catch (error) {
        console.log(error)
    }
})

module.exports = {
    user
}