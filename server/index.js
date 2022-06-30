const mongoose = require('mongoose');
const express = require('express');
const loginsControllers = require('./controllers/logins.js');
const meals = require('./models/meals.js');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');




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
    app.post('/get-location', loginsControllers.getLocation);
    //multer storage ingine
    const storage = multer.diskStorage({
        destination: (req,file,cb)=>{
            fs.mkdir('./uploads/',(err)=>{
                cb(null, './uploads/');
             });
        },
        filename: (req,file,cb)=>{
            //figur out a afile naming system
            cb(null, file.originalname)
        }
    })
    //asking multer to use this storage ingine
    const upload = multer({ storage: storage});
    //posting the image
    app.post('/upload-meal',upload.single('test'), (req,res)=>{
        const saveMeal = new meals({
            name: req.body.name,
            image: {
                data: fs.readFileSync('uploads/' + req.file.filename),
                contentType: "image/png"
            },
            type: req.body.type,
            availability: req.body.available
        });
        saveMeal.save()
        .then(()=> res.send("saved"))
        .catch((err)=>{console.log("errbody");})
    })
    app.listen(8000, ()=>{
        console.log("server on port 8000");
    })
    app.get('/get-meals', async (req,res)=>{
        const allData = await  meals.find();
        res.json(allData)

    })
})