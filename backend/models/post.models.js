const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
title:{
    type:String,
    required:[true,"Password is required"],
},
body:{
    type:String,
},
createdBy:{
    type:mongoose.Types.ObjectId,
    ref:"User"
}
},{timestamps:true});

module.exports = mongoose.model('Post',postSchema)