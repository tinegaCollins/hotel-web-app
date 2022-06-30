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

exports.loginById = async (req,res)=>{
    try {
        const user = await customers.findById(req.body.userID);
        res.send(user);
    }
    catch {
        res.send(false)
    }
}

exports.getCart = async (req, res)=>{
    const user = await customers.findById(req.body.id)
    if( user != null){
        const cart = user.cart;
        const onlyId = cart.map((id)=>{
            return id.itemID
        })
        res.send(cart)
    }
    else {
        res.send("not found")
    }
}
exports.removeFromCart = async(req,res)=>{
    try{
        const item = req.body.item;
        const user = await customers.findById(req.body);
        const cart = user.cart;
        const indexOfItem = cart.indexOf(item)
        cart.splice(indexOfItem, 1)
        res.send(true)
    }
    catch{
        res.send(false)
    }
}

exports.addToCart = async (req,res)=> {
    try {
        const item = req.body.item;
        const user = await customers.findById(req.body);
        const cart = user.cart;
        cart.push(item);
        res.send(true)
    }
    catch {
        res.send(false)
    }
}
const temp = {
    itemID: "eyfhreiufherg",
    quantity: 2,
    price: 444,
    total: 888
}
exports.checkOut = async (req,res)=>{
    try{
        const user = customers.findById(req.body.id);
        const cart = (await user).cart;
        const balance = req.body.balance;
        //use the balance and cart to get the api from mpesa
    }
    catch {
        console.log("didnt work");
    }
}