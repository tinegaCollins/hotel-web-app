const mongoose = require('mongoose');
const express = require('express');
const loginsControllers = require('./controllers/logins.js')
const cors = require('cors');
const multer = require('multer');
mongoose.connect(
    "mongodb://localhost:27017/hotelini",
    { useNewUrlParser: true }
).then(()=>{
    const app = express()
    app.use(express.json());
    app.use(cors({
        origin: "*",
        methods: ["GET", "POST", "PATCH","DELETE"]
    }))
    app.post('/create-account', loginsControllers.createNewUser);
    app.post('/login', loginsControllers.login);
    app.post('/check-number', loginsControllers.checkNumber);
    app.post('/get-user-data', loginsControllers.loginById);
    app.listen(8000, ()=>{
        console.log("server on port 8000");
    })
})