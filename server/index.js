const mongoose = require('mongoose');
const express = require('express');
mongoose.connect(
    "mongodb://localhost:27017/CEMS",
    { useNewUrlParser: true }
).then(()=>{
    const app = express()
    app.listen(8000, ()=>{
        console.log("server on port 8000");
    })
})