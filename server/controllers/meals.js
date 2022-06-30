const meals = require("../models/meals.js");


exports.getSpecial = async (req,res)=>{
    const specials = await meals.find({ special: true})
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
