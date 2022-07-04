const meals = require("../models/meals.js");


exports.getSpecials = async (req,res)=>{
    const specials = await meals.find({ special : true })
    if( specials != null){
        res.send(specials)
    }
    else{
        res.send("could not found the requeste items ")
    }
}

exports.findOne = async (req,res)=>{
    const one = await meals.findById( req.body.id)
    if(one != null){
        res.send(one)
    }
    else{
        res.send("not found")
    }
}


exports.addFood = async (req,res)=>{
    try{
        const newMeal = new meals({
            name: req.body.name,
            tempImage: req.body.tempImage,
            type: req.body.type,
            orders: 0,
            availability: req.body.availability
        })
        await newMeal.save();
        res.send(true);
    }
    catch{
        res.send(false)
    }
}

exports.filterByType = async (req, res)=>{
    try {
        const filter = await meals.find({type: req.params.type});
        res.send(filter)
    }
    catch {
        res.send("could not find the requested items")
    }
}

exports.getThreeRandom = async (req,res)=>{
    const all = await meals.find({})
    const random = Math.floor(Math.random() * all.length)
    const random2 = Math.floor(Math.random() * all.length)
    const random3 = Math.floor(Math.random() * all.length)
    res.send([all[random], all[random2], all[random3]])
}