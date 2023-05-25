var mongoose=require("mongoose")
var userschema=mongoose.Schema({
    Name:{
        type:String,
        require:true
    },
    Mobile:{
        type:String,
        require:true
    },
    Email:{
        type:String,
        require:true
    },
    Username:{
        type:String,
        require:true
    },
    Password:{
        type:String,
        require:true
    },
    Active:{
        type:Boolean,
        default:true
    }
})

var User=mongoose.model("user", userschema)

module.exports=User

