const mongoose = require("mongoose");

const schema = new mongoose({
    name: String,
    image: String,
    type: String,
    orders: Number,
    availability: Boolean
})

module.exports = mongoose.Model('meal', schema);