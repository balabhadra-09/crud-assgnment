const express = require("express");
const cors = require('cors')
const mongoose = require("mongoose");
const connectDb = require("./Db.connect");
 require("dotenv").config()
 connectDb()

 const PORT = process.env.PORT || 8080

const app = express();

app.use(express.json());
app.use(cors())

const AuthRoute = require("./Routes/AuthRoute");
const UserRoute = require("./Routes/UserRoute");
app.use("/v1/api",UserRoute);
app.use("/v1/api",AuthRoute);



const server = app.listen(PORT , ()=>{
    console.log(`server is runing on port:${PORT}`);
})