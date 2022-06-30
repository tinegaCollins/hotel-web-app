const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name: String,
    image: {
        data: Buffer,
        contentType: String
    },
    type: String,
    orders: Number,
    availability: Boolean
})

module.exports = mongoose.model('meal', schema);