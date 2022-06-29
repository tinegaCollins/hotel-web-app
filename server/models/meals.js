const mongoose = require("mongoose");

const schema = new mongoose({
    name: String,
    image: {
        data: Buffer,
        contentType: String
    },
    type: String,
    orders: Number,
    availability: Boolean
})

module.exports = mongoose.Model('meal', schema);