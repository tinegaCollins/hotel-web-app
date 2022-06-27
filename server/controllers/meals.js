const meals = require("../models/meals.js");

exports.createMeal = async(req,res)=>{
    const newMeal = await new meals({ })
    newMeal.save()
}