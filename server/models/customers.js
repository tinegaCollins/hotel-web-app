const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    userName : String,
    phone : String,
    password: String,
    location: String,
    cart: [{
        itemID: String,
        quantity: Number
    }]
})

module.exports = mongoose.model('customer', schema);