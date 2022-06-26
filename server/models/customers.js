const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name: String,
    number: String,
    password: String,
    location: String,
    cart: [String]
})

module.exports = mongoose.model('customer', schema)