const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
        firstname:{
            type:String,
            require:true
        },
        lastname:{
            type:String,
            require:true
        },
        email:{
            type:String,
            require:true,
            unique:true
        },
        mobile:{
            type:String,
            require:true
        },
        gender:{
            type:String,
            require:true
        },
        profile:{
            type:String,
            require:true
        },
        active:{
            type:String,
            require:true
        },
        location:{
            type:String,
            require:true
        }
})

const users = new mongoose.model("users", userSchema);

module.exports = users;