const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TambolaSchema = mongoose.Schema({
    
    tambola_ticket:{
        type:Array,
        require:true
    }
});

var tambola=mongoose.model("tambola", TambolaSchema)

module.exports=tambola