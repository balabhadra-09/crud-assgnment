const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchma = Schema({
    userid:{
        type:mongoose.Schema.Types.ObjectId
    },
    username:{
        type:String,
        require:[true, " Username is required"],
        uniqe:true
    },
    email:{
        type:String,
        require:[true, "Email is required"],
        uniqe:true
    },
    password:{
        type:String,
        require:[true, "password is required"]
    },
    phoneno:{
        type:String,
        require:[true , "Phone number is required"],
        uniqe:true
    },
    city:{
       type:String,
       require:[true, "city name is required"]
    }
    
},
{ timestamps: true });

module.exports = mongoose.model("User", UserSchma);