const mongoose = require("mongoose");

const MONGO_URI = process.env.MONGO_URI

const connectDb = async() => {
     try {
        const db = await mongoose.connect(process.env.MONGO_URI)
        if(!db){
            throw new error("Invalid DB url")
        }
        console.log(`Db connection succesfully:${mongoose.connection.host}`)
     } catch (error) {
      console.log("Db connection failed");
     }
}
module.exports = connectDb
