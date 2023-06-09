require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload")

require("./db/connection");
const users = require('./models/userSchema')
const cors = require("cors");
const router = require("./routes/router")
const port = 8003;
app.use(cors())
app.use(express.json());
app.use(router)
app.use(fileUpload({
    useTempFiles:true
}))


app.listen(port, ()=>{
    console.log(`server is running at port number ${port}`);
})