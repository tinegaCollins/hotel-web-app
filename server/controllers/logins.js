const customers = require("../models/customers.js");


exports.createNewUser = async (req, res)=> {
    try {
        const newUser = new customers(req.body)
        await newUser.save()
        const id = newUser._id
        res.send(id)
    }
    catch {
        res.send(false)
    }
}