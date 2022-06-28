const customers = require("../models/customers.js");
const bcrypt = require("bcrypt");




exports.createNewUser = async (req, res)=> {
    try {
        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(req.body.password, salt);
        const newUser = new customers({
            userName : req.body.name,
            phone: req.body.phone,
            password : hashPassword
        })

        await newUser.save()
        res.send(newUser)
    }
    catch {
        res.send(false)
    }
}

exports.login = async (req,res)=>{
    const user = await customers.findOne({phone: req.body.phone})
    if(user === null ){
        res.send("phone number not linked to any account")
    }else{
        if( await bcrypt.compare(req.body.password, user.password)){
            res.send(user)
        }
        else {
            res.send(false)
        }
    }
}

exports.checkNumber = async (req,res)=>{
    const user = await customers.findOne({ phone: req.body.phone})
    if(user != null){
        res.send(true)
    }else {
        res.send(false)
    }
}