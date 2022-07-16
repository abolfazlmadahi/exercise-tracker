const mongoose = require("mongoose");

const exerciseSchema=new mongoose.Schema({
    description:{type:String,required:true},
    duration:{type:Number,required:true},
    date:{type:Date,required:true},
    user:{type:mongoose.Schema.Types.ObjectId,ref:'user'}
})

module.exports=mongoose.model('exercise',exerciseSchema)