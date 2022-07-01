const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name: String,
    image: {
        data: Buffer,
        contentType: String
    },
    tempImage: String,
    type: String,
    orders: Number,
    availability: Boolean,
    price: Number,
    special: Boolean
})

module.exports = mongoose.model('food', schema);