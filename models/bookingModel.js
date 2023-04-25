const mongoose = require("mongoose")

const bookingSchema = mongoose.Schema({
    user: {
        type: Object,
        ref: String
    },
    flight: {
        type: Object,
        ref: String
    }
},
    {
        versionKey: false
    })

const bookingModel = mongoose.model("bookingdata", bookingSchema)

module.exports = {
    bookingModel
}