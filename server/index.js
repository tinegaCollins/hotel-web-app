const mongoose = require('mongoose');
const express = require('express');
const loginsControllers = require('./controllers/logins.js')
mongoose.connect(
    "mongodb://localhost:27017/hotelini",
    { useNewUrlParser: true }
).then(()=>{
    const app = express()
    app.post('/create-account', loginsControllers.createNewUser)
    app.listen(8000, ()=>{
        console.log("server on port 8000");
    })
})