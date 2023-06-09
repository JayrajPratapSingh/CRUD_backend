const express = require("express");
const router = express.Router();
const users = require("../models/userSchema");





//User Register

router.post("/register", async(req, res)=>{
    console.log(req.body);
    const {firstname, lastname, email, mobile, gender, profile , active, location}= req.body;
    
    
    try{
        const preuser = await users.findOne({email:email});
        console.log(preuser);
        if(preuser){
            res.status(422).json("This user is already exist");
        }
        else if(!firstname || !lastname || !email || !mobile || !gender || !profile || !active || !location){
            res.status(422).json("Please fill the all data")
        }
        else{
            const adduser = new users({
                firstname, lastname, email, mobile, gender, profile , active, location
            })
            await adduser.save();
            res.status(201).json(adduser);
            console.log(adduser);
        }
    }
    catch{(error)=>{
        res.status(422).json(error)
    }}
})


// Get User Data

router.get("/getdata", async(req, res)=>{
    try{
        const userdata  = await users.find();
        res.status(201).json(userdata)
        console.log(userdata);
    }
    catch{
        (error)=>{
            console.log(error)
        }
    }
});

//get Individual data

router.get("/getuser/:id", async(req, res)=>{
    try{
        console.log(req.params);
        const {id} =req.params;
        const userindividual = await users.findById({_id:id});
        console.log(userindividual);
        res.status(201).json(userindividual);
    }
    catch(error){
        res.status(422).json(error)
    }
})


//Edit and Update user data

router.patch("/updateuser/:id", async(req,res)=>{
    try{
        const {id} = req.params;
        const updateuser = await users.findByIdAndUpdate(id,req.body, {
            new:true
        });
        console.log(updateuser)
        res.status(201).json(updateuser);
    }
    catch(error){
        res.status(422).json(error)
    }
})

// Deliting the user

router.delete("/deleteuser/:id", async(req, res)=>{
    try{
        const {id} = req.params;
        const deleteuser = await users.findByIdAndDelete({_id:id});
        console.log(deleteuser);
        res.status(201).json(deleteuser);

    }
    catch(error){
        res.status(422).json(error)
    }
})


module.exports = router;