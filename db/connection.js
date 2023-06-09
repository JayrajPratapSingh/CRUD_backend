const mongoose = require("mongoose");

const DB =  "mongodb+srv://jairaj273310:jai12345@cluster0.tawpcww.mongodb.net/mernstack?retryWrites=true&w=majority"

mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>
    console.log("connected")
).catch((error)=>{
    console.log(error)
})